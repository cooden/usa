/* =========================================================
   美国文化地图 · 最终版交互（Three.js 3D 地图）
   ========================================================= */
(function () {
  'use strict';

  const culture = window.US_CULTURE;
  const REGIONS = culture.regions;
  const STATES = culture.states;
  const CORRIDORS = culture.corridors;
  const FIPS = window.US_FIPS;

  const mapCanvas = document.getElementById('mapCanvas');
  const panel = document.getElementById('panel');
  const tooltip = document.getElementById('tooltip');
  const statusEl = document.getElementById('mapStatus');
  const searchInput = document.getElementById('search');
  const chipsEl = document.getElementById('regionChips');
  const legendEl = document.getElementById('legend');
  const corridorGrid = document.getElementById('corridorGrid');
  const banner = document.getElementById('corridorBanner');
  const cbName = document.getElementById('cbName');
  const cbDesc = document.getElementById('cbDesc');
  const atlasGrid = document.getElementById('atlasGrid');

  const stateEls = {};       // abbr -> state wrapper
  const meshToState = new Map();
  const regionCount = { northeast: 0, midwest: 0, south: 0, west: 0 };
  Object.values(STATES).forEach(s => { regionCount[s.region] += 1; });

  let regionFilter = 'all';
  let query = '';
  let activeCorridor = null;
  let selected = null;
  let hovered = null;

  /* ---------- 区域配色 ---------- */
  const REGION_BASE = {
    northeast: 0x5b7bd6,
    midwest:   0xc89a3a,
    south:     0xd96648,
    west:      0x34a888
  };

  /* ---------- SVG path 解析 ---------- */
  function parsePath(d) {
    const subs = [];
    let cur = null;
    let x = 0, y = 0, cx = 0, cy = 0;
    const tokens = d.match(/[a-zA-Z]|[-+]?(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?/g) || [];
    let i = 0;
    while (i < tokens.length) {
      const t = tokens[i];
      if (/[a-zA-Z]/.test(t)) {
        const cmd = t; i++;
        const rel = cmd === cmd.toLowerCase();
        const abs = cmd.toUpperCase();
        if (abs === 'M') {
          cur = []; subs.push(cur);
          x = +tokens[i++]; y = +tokens[i++];
          if (rel) { x += cx; y += cy; }
          cur.push([x, y]); cx = x; cy = y;
          while (i < tokens.length && !/[a-zA-Z]/.test(tokens[i])) {
            x = +tokens[i++]; y = +tokens[i++];
            if (rel) { x += cx; y += cy; }
            cur.push([x, y]); cx = x; cy = y;
          }
        } else if (abs === 'L') {
          while (i < tokens.length && !/[a-zA-Z]/.test(tokens[i])) {
            x = +tokens[i++]; y = +tokens[i++];
            if (rel) { x += cx; y += cy; }
            cur.push([x, y]); cx = x; cy = y;
          }
        } else if (abs === 'H') {
          while (i < tokens.length && !/[a-zA-Z]/.test(tokens[i])) {
            x = +tokens[i++]; if (rel) x += cx;
            cur.push([x, cy]); cx = x;
          }
        } else if (abs === 'V') {
          while (i < tokens.length && !/[a-zA-Z]/.test(tokens[i])) {
            y = +tokens[i++]; if (rel) y += cy;
            cur.push([cx, y]); cy = y;
          }
        } else if (abs === 'Z') {
          /* close */
        } else {
          // 未知命令，跳过
        }
      } else {
        i++;
      }
    }
    return subs.filter(s => s && s.length > 1);
  }

  /* ---------- Three.js 初始化 ---------- */
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x05070b);
  scene.fog = new THREE.Fog(0x05070b, 40, 80);

  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 500);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  mapCanvas.appendChild(renderer.domElement);
  renderer.domElement.style.display = 'block';
  renderer.domElement.style.width = '100%';
  renderer.domElement.style.height = '100%';
  renderer.domElement.style.cursor = 'grab';

  // 城市标签渲染器（CSS2D，文字始终面向相机）
  const labelRenderer = new THREE.CSS2DRenderer();
  labelRenderer.setSize(mapCanvas.clientWidth || 1, mapCanvas.clientHeight || 1);
  labelRenderer.domElement.style.position = 'absolute';
  labelRenderer.domElement.style.top = '0';
  labelRenderer.domElement.style.left = '0';
  labelRenderer.domElement.style.pointerEvents = 'none';
  mapCanvas.appendChild(labelRenderer.domElement);

  // 灯光
  scene.add(new THREE.AmbientLight(0xffffff, 0.55));
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.85);
  dirLight.position.set(10, 24, 12);
  scene.add(dirLight);
  const rimLight = new THREE.DirectionalLight(0x8fb4ff, 0.3);
  rimLight.position.set(-12, 10, -14);
  scene.add(rimLight);

  const mapGroup = new THREE.Group();
  scene.add(mapGroup);

  /* ---------- 计算整体边界并构建州 ---------- */
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  const parsed = window.US_STATE_PATHS.map(item => {
    const subs = parsePath(item.d);
    subs.forEach(pts => pts.forEach(([x, y]) => {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }));
    return { item, subs };
  });

  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2;
  const maxDim = Math.max(maxX - minX, maxY - minY);
  const SCALE = 30 / maxDim;
  const EXTRUDE = 0.9;

  parsed.forEach(({ item, subs }) => {
    const abbr = FIPS[item.id];
    const info = STATES[abbr];
    if (!abbr || !info) return;

    const baseColor = REGION_BASE[info.region];
    const material = new THREE.MeshStandardMaterial({
      color: baseColor,
      metalness: 0.15,
      roughness: 0.62,
      flatShading: true,
      emissive: new THREE.Color(0x000000),
      emissiveIntensity: 0,
      polygonOffset: true,
      polygonOffsetFactor: 1,
      polygonOffsetUnits: 1
    });

    const group = new THREE.Group();
    group.userData.abbr = abbr;
    subs.forEach(pts => {
      if (pts.length < 3) return;
      const shape = new THREE.Shape();
      shape.moveTo((pts[0][0] - cx) * SCALE, -(pts[0][1] - cy) * SCALE);
      for (let k = 1; k < pts.length; k++) {
        shape.lineTo((pts[k][0] - cx) * SCALE, -(pts[k][1] - cy) * SCALE);
      }
      const geom = new THREE.ExtrudeGeometry(shape, { depth: EXTRUDE, bevelEnabled: false });
      geom.rotateX(-Math.PI / 2);
      geom.computeVertexNormals();
      const mesh = new THREE.Mesh(geom, material);
      mesh.userData.abbr = abbr;
      group.add(mesh);
      meshToState.set(mesh, abbr);
    });

    mapGroup.add(group);

    stateEls[abbr] = {
      abbr,
      region: info.region,
      group,
      material,
      baseColor,
      baseY: 0,
      targetY: 0,
      targetScale: 1,
      hovered: false,
      selected: false,
      dimmed: false,
      corridor: false,
      update() {
        let y = 0;
        let sc = 1;
        if (this.selected) { y = 1.8; sc = 1.05; }
        else if (this.hovered) { y = 1.5; sc = 1.08; }
        else if (this.corridor) { y = 0.6; sc = 1.0; }
        this.targetY = y;
        this.targetScale = sc;

        const active = this.hovered || this.selected;
        this.material.emissive.setHex(active ? this.baseColor : (this.corridor ? this.baseColor : 0x000000));
        this.material.emissiveIntensity = active ? (this.selected ? 0.95 : 0.8) : (this.corridor ? 0.35 : 0);
        this.material.transparent = this.dimmed;
        this.material.opacity = this.dimmed ? 0.1 : 1;
        if (this.dimmed) {
          const c = new THREE.Color(this.baseColor).multiplyScalar(0.45);
          this.material.color.copy(c);
        } else {
          this.material.color.setHex(this.baseColor);
        }
      }
    };
  });

  /* ---------- 主要城市标注 ---------- */
  const cityGroup = new THREE.Group();
  scene.add(cityGroup);

  const cityDotGeom = new THREE.RingGeometry(0.22, 0.55, 24);
  const cityDotMat = new THREE.MeshBasicMaterial({
    color: 0xffffff, side: THREE.DoubleSide, transparent: true, opacity: 0.9
  });

  (culture.majorCities || []).forEach(city => {
    const px = (city.x - cx) * SCALE;
    const pz = -(city.y - cy) * SCALE;
    const py = EXTRUDE + 0.15;

    // 白色圆点标记
    const dot = new THREE.Mesh(cityDotGeom, cityDotMat);
    dot.rotation.x = -Math.PI / 2;
    dot.position.set(px, py, pz);
    cityGroup.add(dot);

    // 文字标签（CSS2D，始终面向相机）
    const div = document.createElement('div');
    div.className = 'city-label';
    div.innerHTML = '<span class="city-name">' + city.name + '</span>';
    const label = new THREE.CSS2DObject(div);
    label.position.set(px, py + 0.8, pz);
    labelRenderer.add(label);
  });

  /* ---------- 相机 / 轨道控制 ---------- */
  const orbit = { radius: 44, theta: 0, phi: 1.0, target: new THREE.Vector3(0, 0, 0) };
  function updateCamera() {
    const r = orbit.radius;
    const sp = Math.sin(orbit.phi);
    camera.position.set(
      orbit.target.x + r * sp * Math.sin(orbit.theta),
      orbit.target.y + r * Math.cos(orbit.phi),
      orbit.target.z + r * sp * Math.cos(orbit.theta)
    );
    camera.lookAt(orbit.target);
  }
  updateCamera();

  /* ---------- 渲染循环（含升降动画） ---------- */
  function animate() {
    requestAnimationFrame(animate);
    Object.values(stateEls).forEach(s => {
      s.group.position.y += (s.targetY - s.group.position.y) * 0.18;
      const cur = s.group.scale.x;
      const next = cur + (s.targetScale - cur) * 0.18;
      s.group.scale.setScalar(next);
    });
    renderer.render(scene, camera);
    labelRenderer.render(scene, camera);
  }
  animate();

  function resize() {
    const w = mapCanvas.clientWidth || 1;
    const h = mapCanvas.clientHeight || 1;
    labelRenderer.setSize(w, h);
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);

  /* ---------- 交互：raycaster + 轨道 ---------- */
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  let dragging = false;
  let dragMoved = false;
  let downX = 0, downY = 0, lastX = 0, lastY = 0;

  function ndcFromEvent(e) {
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  }

  function pickState(e) {
    ndcFromEvent(e);
    raycaster.setFromCamera(pointer, camera);
    const meshes = [];
    mapGroup.traverse(o => { if (o.isMesh) meshes.push(o); });
    const hits = raycaster.intersectObjects(meshes, false);
    if (hits.length) {
      return meshToState.get(hits[0].object) || null;
    }
    return null;
  }

  renderer.domElement.addEventListener('pointerdown', e => {
    dragging = true;
    dragMoved = false;
    downX = lastX = e.clientX;
    downY = lastY = e.clientY;
    renderer.domElement.style.cursor = 'grabbing';
  });

  renderer.domElement.addEventListener('pointermove', e => {
    if (dragging) {
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX; lastY = e.clientY;
      if (Math.abs(e.clientX - downX) > 4 || Math.abs(e.clientY - downY) > 4) dragMoved = true;
      orbit.theta -= dx * 0.005;
      orbit.phi = Math.max(0.18, Math.min(Math.PI / 2 - 0.06, orbit.phi - dy * 0.005));
      updateCamera();
      return;
    }
    const abbr = pickState(e);
    setHover(abbr);
    if (abbr) {
      placeTooltip(e.clientX, e.clientY);
    } else {
      hideTooltip();
    }
  });

  renderer.domElement.addEventListener('pointerup', e => {
    dragging = false;
    renderer.domElement.style.cursor = 'grab';
  });

  renderer.domElement.addEventListener('click', e => {
    const abbr = pickState(e);
    if (dragMoved) return;
    if (abbr) selectState(abbr, true);
  });

  renderer.domElement.addEventListener('pointerleave', () => {
    dragging = false;
    setHover(null);
    hideTooltip();
  });

  renderer.domElement.addEventListener('wheel', e => {
    e.preventDefault();
    orbit.radius = Math.max(20, Math.min(80, orbit.radius * (1 + e.deltaY * 0.0012)));
    updateCamera();
  }, { passive: false });

  renderer.domElement.addEventListener('contextmenu', e => e.preventDefault());

  function setHover(abbr) {
    if (hovered === abbr) return;
    if (hovered && stateEls[hovered]) {
      stateEls[hovered].hovered = false;
      stateEls[hovered].update();
    }
    hovered = abbr;
    if (abbr && stateEls[abbr]) {
      stateEls[abbr].hovered = true;
      stateEls[abbr].update();
      hoverState(abbr);
    } else {
      hideTooltip();
    }
  }

  /* ---------- 提示卡 ---------- */
  function hoverState(abbr) {
    const info = STATES[abbr];
    const region = REGIONS[info.region];
    tooltip.innerHTML =
      '<div class="tt-name"><b>' + info.name + '</b><i>' + info.en + '</i></div>' +
      '<div class="tt-region" style="--dot:' + region.color + '">' + region.name + ' · ' + region.en + '</div>' +
      '<div class="tt-tags">' + info.tags.map(t => '<span>' + t + '</span>').join('') + '</div>' +
      '<div class="tt-cue">' + (selected === abbr ? '已选中 · 点击再次查看' : '点击查看完整名片') + '</div>';
    tooltip.classList.add('is-on');
  }

  function placeTooltip(x, y) {
    tooltip.classList.remove('is-below');
    const half = Math.min(130, Math.max(80, tooltip.offsetWidth / 2));
    const left = Math.min(Math.max(x, half + 10), window.innerWidth - half - 10);
    tooltip.style.left = left + 'px';
    tooltip.style.top = Math.max(y + 12, 12) + 'px';
  }

  function hideTooltip() { tooltip.classList.remove('is-on'); }

  /* ---------- 选中州 ---------- */
  function selectState(abbr, writeHash) {
    selected = abbr;
    Object.values(stateEls).forEach(s => { s.selected = false; s.update(); });
    if (stateEls[abbr]) { stateEls[abbr].selected = true; stateEls[abbr].update(); }
    renderPanel(abbr);
    atlasGrid.classList.add('has-selection');
    if (window.matchMedia('(hover: none)').matches) hideTooltip();
    if (window.innerWidth <= 720) {
      setTimeout(() => panel.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
    }
    if (writeHash) {
      try { history.replaceState(null, '', '#state-' + abbr); } catch (err) { /* file:// 下忽略 */ }
    }
  }

  function clearSelection() {
    selected = null;
    Object.values(stateEls).forEach(s => { s.selected = false; s.update(); });
    renderPanel(null);
    atlasGrid.classList.remove('has-selection');
    try { history.replaceState(null, '', location.pathname + location.search); } catch (err) { /* ignore */ }
  }

  function renderPanel(abbr) {
    if (!abbr) {
      panel.style.removeProperty('--accent');
      panel.innerHTML =
        '<div class="panel-empty">' +
          '<h3>选择一个州</h3>' +
          '<p class="panel-empty-desc">点击地图上的州，查看完整文化名片。</p>' +
          '<div class="panel-regions">' +
            Object.keys(REGIONS).map(key => {
              const r = REGIONS[key];
              return '<div class="panel-region-row">' +
                '<i style="--c:' + r.color + '"></i>' +
                '<b>' + r.name + '</b><small>' + r.en + '</small>' +
                '<span>' + regionCount[key] + ' 州</span>' +
              '</div>';
            }).join('') +
          '</div>' +
          '<div class="panel-tip"><b>提示</b><span class="tip-desktop">按 Esc 取消选中；拖动旋转视角，滚轮缩放。</span><span class="tip-mobile">点击地图上的其他州切换；拖动旋转，双指缩放。</span></div>' +
          '<div class="panel-foot-note">点击查看 · Esc 取消</div>' +
        '</div>';
      return;
    }

    const info = STATES[abbr];
    const region = REGIONS[info.region];
    const accent = region.color;
    panel.style.setProperty('--accent', accent);
    panel.style.setProperty('--accent-bg', hexToRgba(accent, 0.1));
    panel.style.setProperty('--accent-soft', hexToRgba(accent, 0.34));

    panel.innerHTML =
      '<div class="panel-state">' +
        '<button class="panel-close" type="button" aria-label="关闭">✕</button>' +
        '<span class="panel-watermark">' + abbr + '</span>' +
        '<div class="panel-kicker"><i></i>' + region.name + ' · ' + region.en + '</div>' +
        '<div class="panel-title"><h3>' + info.name + '</h3><span>' + info.en + '</span></div>' +
        '<div class="panel-nick">' + info.title + '</div>' +
        '<div class="tag-row">' + info.tags.map(t => '<span>' + t + '</span>').join('') + '</div>' +
        '<p class="panel-desc">' + info.desc + '</p>' +
        '<dl class="facts">' +
          fact('音乐', info.music) +
          fact('食物', info.food) +
          fact('地标', info.landmark) +
          fact('人物', info.figure) +
        '</dl>' +
        '<div class="panel-city"><span>代表城市 / 地区</span><strong>' + info.city + '</strong></div>' +
        '<div class="panel-actions">' +
          '<button type="button" class="primary" data-action="random">换一个州 →</button>' +
          '<button type="button" data-action="region">只看' + region.name + '</button>' +
        '</div>' +
      '</div>';

    panel.querySelector('[data-action="random"]').addEventListener('click', randomState);
    panel.querySelector('[data-action="region"]').addEventListener('click', () => {
      setRegionFilter(activeCorridor ? 'all' : info.region);
    });
    panel.querySelector('.panel-close').addEventListener('click', clearSelection);
  }

  function fact(label, value) {
    return '<div><dt>' + label + '</dt><dd>' + value + '</dd></div>';
  }

  function hexToRgba(hex, alpha) {
    const n = parseInt(hex.replace('#', ''), 16);
    return 'rgba(' + ((n >> 16) & 255) + ',' + ((n >> 8) & 255) + ',' + (n & 255) + ',' + alpha + ')';
  }

  /* ---------- 筛选 ---------- */
  function buildChips() {
    const items = [{ key: 'all', name: '全部', count: 51 }].concat(
      Object.keys(REGIONS).map(key => ({ key, name: REGIONS[key].name, count: regionCount[key] }))
    );
    chipsEl.innerHTML = items.map(item =>
      '<button type="button" class="chip' + (item.key === 'all' ? ' is-on' : '') + '" data-region="' + item.key + '">' +
        item.name + ' <em>' + item.count + '</em>' +
      '</button>'
    ).join('');
    chipsEl.querySelectorAll('.chip').forEach(btn => {
      btn.addEventListener('click', () => setRegionFilter(btn.dataset.region));
    });
  }

  function buildLegend() {
    legendEl.innerHTML = Object.keys(REGIONS).map(key =>
      '<button type="button" data-region="' + key + '"><i style="--c:' + REGIONS[key].color + '"></i>' +
      REGIONS[key].name + '</button>'
    ).join('') + '<span class="legend-all">点击图例筛选</span>';
    legendEl.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        setRegionFilter(regionFilter === btn.dataset.region ? 'all' : btn.dataset.region);
      });
    });
  }

  function setRegionFilter(region) {
    regionFilter = region;
    if (activeCorridor) exitCorridor(false);
    if (query) { query = ''; searchInput.value = ''; }
    syncFilters();
  }

  function syncFilters() {
    chipsEl.querySelectorAll('.chip').forEach(btn => btn.classList.toggle('is-on', btn.dataset.region === regionFilter));
    legendEl.querySelectorAll('button').forEach(btn => btn.classList.toggle('is-on', btn.dataset.region === regionFilter));
    applyFilters();
  }

  function matches(info) {
    const q = query.trim().toLowerCase();
    if (regionFilter !== 'all' && info.region !== regionFilter) return false;
    if (!q) return true;
    const hay = [
      info.name, info.en, info.title, info.city, info.music, info.food,
      info.landmark, info.figure, info.desc, info.tags.join(' '),
      REGIONS[info.region].name, REGIONS[info.region].en
    ].join(' ').toLowerCase();
    return hay.indexOf(q) !== -1;
  }

  function applyFilters() {
    let count = 0;
    const corridorSet = activeCorridor ? activeCorridor.states : null;
    Object.keys(stateEls).forEach(abbr => {
      const ok = matches(STATES[abbr]);
      if (ok) count += 1;
      const s = stateEls[abbr];
      const dimmed = !ok || (corridorSet !== null && corridorSet.indexOf(abbr) === -1);
      s.dimmed = dimmed;
      s.update();
    });

    if (activeCorridor) {
      statusEl.textContent = activeCorridor.name + ' · ' + activeCorridor.states.length + ' 个州';
    } else if (query.trim()) {
      statusEl.textContent = '搜索「' + query.trim() + '」· ' + count + ' 个结果';
    } else if (regionFilter !== 'all') {
      statusEl.textContent = REGIONS[regionFilter].name + ' · ' + count + ' 个州';
    } else {
      statusEl.textContent = '51 个州与特区';
    }
  }

  /* ---------- 随机 ---------- */
  function randomState() {
    let pool = Object.keys(stateEls).filter(abbr => !stateEls[abbr].dimmed);
    if (!pool.length) { setRegionFilter('all'); pool = Object.keys(stateEls); }
    pool = pool.filter(abbr => abbr !== selected);
    if (!pool.length) pool = Object.keys(stateEls);
    const pick = pool[Math.floor(Math.random() * pool.length)];
    selectState(pick, true);
    flashState(pick);
  }

  function flashState(abbr) {
    const s = stateEls[abbr];
    if (!s) return;
    s.group.position.y = 2.4;
  }

  /* ---------- 小州快捷 ---------- */
  const SMALL_STATES = [
    ['RI', '罗德岛'], ['DE', '特拉华'], ['DC', '华盛顿特区'], ['CT', '康涅狄格'],
    ['NJ', '新泽西'], ['MA', '马萨诸塞'], ['NH', '新罕布什尔'], ['VT', '佛蒙特'], ['MD', '马里兰']
  ];

  function buildSmallStates() {
    const wrap = document.getElementById('smallStates');
    wrap.innerHTML = '<span class="ss-label">小州快捷</span><div class="ss-list">' +
      SMALL_STATES.map(([abbr, label]) =>
        '<button type="button" data-abbr="' + abbr + '"><b>' + abbr + '</b>' + label + '</button>'
      ).join('') + '</div>';
    wrap.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        const abbr = btn.dataset.abbr;
        setHover(abbr);
        const r = btn.getBoundingClientRect();
        placeTooltip(r.left + r.width / 2, r.top - 6);
      });
      btn.addEventListener('mouseleave', () => { setHover(null); hideTooltip(); });
      btn.addEventListener('click', () => {
        selectState(btn.dataset.abbr, true);
        flashState(btn.dataset.abbr);
      });
    });
  }

  /* ---------- 文化走廊 ---------- */
  function buildCorridors() {
    corridorGrid.innerHTML = CORRIDORS.map((c, i) =>
      '<button type="button" class="corridor-card" data-id="' + c.id + '">' +
        '<div class="cc-top"><span>CORRIDOR ' + String(i + 1).padStart(2, '0') + '</span>' +
          '<span class="cc-index">' + String(i + 1).padStart(2, '0') + ' / 06</span></div>' +
        '<h3>' + c.name + '</h3>' +
        '<div class="cc-en">' + c.en + '</div>' +
        '<p>' + c.desc + '</p>' +
        '<div class="cc-foot">' +
          '<span class="cc-dots">' + c.states.map(a => '<i style="--c:' + REGIONS[STATES[a].region].color + '"></i>').join('') + '</span>' +
          '<span>' + c.states.length + ' 个州</span>' +
          '<span class="cc-go">在地图上点亮 →</span>' +
        '</div>' +
      '</button>'
    ).join('');
    corridorGrid.querySelectorAll('.corridor-card').forEach(card => {
      card.addEventListener('click', () => {
        if (activeCorridor && activeCorridor.id === card.dataset.id) exitCorridor(true);
        else enterCorridor(card.dataset.id);
      });
    });
  }

  function enterCorridor(id) {
    const corridor = CORRIDORS.find(c => c.id === id);
    if (!corridor) return;
    activeCorridor = corridor;
    regionFilter = 'all';
    query = '';
    searchInput.value = '';
    syncFilters();

    Object.values(stateEls).forEach(s => { s.corridor = false; s.update(); });
    corridor.states.forEach(abbr => {
      const s = stateEls[abbr];
      if (!s) return;
      s.corridor = true;
      s.update();
    });

    corridorGrid.querySelectorAll('.corridor-card').forEach(card => {
      card.classList.toggle('is-on', card.dataset.id === id);
    });

    cbName.textContent = corridor.name;
    cbDesc.textContent = corridor.desc;
    banner.hidden = false;
    applyFilters();
  }

  function exitCorridor(scrollBack) {
    activeCorridor = null;
    Object.values(stateEls).forEach(s => { s.corridor = false; s.update(); });
    corridorGrid.querySelectorAll('.corridor-card').forEach(card => card.classList.remove('is-on'));
    banner.hidden = true;
    applyFilters();
    if (scrollBack) {
      document.getElementById('corridors').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  /* ---------- 事件绑定 ---------- */
  searchInput.addEventListener('input', () => {
    query = searchInput.value;
    if (activeCorridor) exitCorridor(false);
    applyFilters();
  });
  document.getElementById('randomBtn').addEventListener('click', randomState);
  document.getElementById('cbClose').addEventListener('click', () => exitCorridor(false));

  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (activeCorridor) exitCorridor(false);
    else if (query) { query = ''; searchInput.value = ''; searchInput.blur(); applyFilters(); }
    else if (selected) clearSelection();
  });

  /* ---------- 启动 ---------- */
  buildChips();
  buildLegend();
  buildSmallStates();
  buildCorridors();
  renderPanel(null);
  applyFilters();

  // 初次画布尺寸校准
  requestAnimationFrame(() => { resize(); });

  const hash = location.hash || '';
  if (hash.indexOf('#state-') === 0) {
    const abbr = hash.replace('#state-', '').toUpperCase();
    if (STATES[abbr]) {
      selectState(abbr, false);
      setTimeout(() => {
        if (window.innerWidth > 720) {
          document.getElementById('atlas').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 120);
    }
  }
})();
