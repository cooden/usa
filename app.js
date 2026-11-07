/* =========================================================
   美国文化地图 · 最终版交互
   ========================================================= */
(function () {
  'use strict';

  const SVG_NS = 'http://www.w3.org/2000/svg';
  const culture = window.US_CULTURE;
  const REGIONS = culture.regions;
  const STATES = culture.states;
  const CORRIDORS = culture.corridors;
  const FIPS = window.US_FIPS;

  const svg = document.getElementById('map');
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

  const stateEls = {};
  const regionCount = { northeast: 0, midwest: 0, south: 0, west: 0 };
  Object.values(STATES).forEach(s => { regionCount[s.region] += 1; });

  let regionFilter = 'all';
  let query = '';
  let activeCorridor = null;
  let selected = null;

  /* ---------- 构建地图 ---------- */
  const g = document.createElementNS(SVG_NS, 'g');
  g.setAttribute('id', 'states');
  svg.appendChild(g);

  window.US_STATE_PATHS.forEach(item => {
    const abbr = FIPS[item.id];
    const info = STATES[abbr];
    if (!abbr || !info) return;

    const el = document.createElementNS(SVG_NS, 'path');
    el.setAttribute('d', item.d);
    el.setAttribute('class', 'st');
    el.setAttribute('data-abbr', abbr);
    el.setAttribute('data-region', info.region);
    el.setAttribute('role', 'button');
    el.setAttribute('tabindex', '0');
    el.setAttribute('aria-label', info.name + '，' + info.en + '，' + info.title);
    el.dataset.hovered = 'false';

    el.addEventListener('mouseenter', () => hoverState(abbr));
    el.addEventListener('mousemove', moveTooltip);
    el.addEventListener('mouseleave', hideTooltip);
    el.addEventListener('click', () => selectState(abbr, true));
    el.addEventListener('focus', () => {
      hoverState(abbr, true);
      const r = el.getBoundingClientRect();
      placeTooltip(r.left + r.width / 2, r.top + r.height / 2, true);
    });
    el.addEventListener('blur', hideTooltip);
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectState(abbr, true);
      }
    });

    g.appendChild(el);
    stateEls[abbr] = el;
  });

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

  function moveTooltip(e) {
    placeTooltip(e.clientX, e.clientY, false);
  }

  function placeTooltip(x, y, forceBelow) {
    const below = forceBelow || y < 190;
    tooltip.classList.toggle('is-below', below);
    const half = Math.min(130, Math.max(80, tooltip.offsetWidth / 2));
    const left = Math.min(Math.max(x, half + 10), window.innerWidth - half - 10);
    tooltip.style.left = left + 'px';
    tooltip.style.top = Math.max(y, 12) + 'px';
  }

  function hideTooltip() {
    tooltip.classList.remove('is-on');
  }

  /* ---------- 选中州 ---------- */
  function selectState(abbr, writeHash) {
    selected = abbr;
    Object.values(stateEls).forEach(el => el.classList.remove('is-selected'));
    if (stateEls[abbr]) stateEls[abbr].classList.add('is-selected');
    renderPanel(abbr);
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
    Object.values(stateEls).forEach(el => el.classList.remove('is-selected'));
    renderPanel(null);
    try { history.replaceState(null, '', location.pathname + location.search); } catch (err) { /* ignore */ }
  }

  function renderPanel(abbr) {
    if (!abbr) {
      panel.style.removeProperty('--accent');
      panel.innerHTML =
        '<div class="panel-empty">' +
          '<div class="panel-kicker"><i class="live-dot"></i> READING THE MAP</div>' +
          '<h3>先从一个州开始</h3>' +
          '<p>把鼠标移到地图上，任意一个州都会亮起。点击它，这里会展开一整张文化名片：一种声音、一道食物、一处地标与一个人物。</p>' +
          '<div class="panel-regions">' +
            Object.keys(REGIONS).map(key => {
              const r = REGIONS[key];
              return '<div class="panel-region-row">' +
                '<i style="--c:' + r.color + '"></i>' +
                '<b>' + r.name + '</b><small>' + r.en.toUpperCase() + '</small>' +
                '<span>' + regionCount[key] + ' 州</span>' +
              '</div>';
            }).join('') +
          '</div>' +
          '<div class="panel-tip"><b>提示</b><span>按 Esc 可以取消选中；点击上方文化区或图例，只保留该区域的州。</span></div>' +
          '<div class="panel-foot-note">CLICK A STATE · ESC TO CLEAR</div>' +
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
        '<span class="panel-watermark">' + abbr + '</span>' +
        '<div class="panel-kicker"><i></i>' + region.name + ' · ' + region.en.toUpperCase() + '</div>' +
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
          '<button type="button" class="primary" data-action="random">随机下一州 →</button>' +
          '<button type="button" data-action="region">只看' + region.name + '</button>' +
        '</div>' +
      '</div>';

    panel.querySelector('[data-action="random"]').addEventListener('click', randomState);
    panel.querySelector('[data-action="region"]').addEventListener('click', () => {
      setRegionFilter(activeCorridor ? 'all' : info.region);
      if (window.innerWidth > 1120) {
        document.getElementById('mapCard').scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
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
      Object.keys(REGIONS).map(key => ({
        key: key,
        name: REGIONS[key].name,
        count: regionCount[key]
      }))
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
    if (query) {
      query = '';
      searchInput.value = '';
    }
    syncFilters();
  }

  function syncFilters() {
    chipsEl.querySelectorAll('.chip').forEach(btn => {
      btn.classList.toggle('is-on', btn.dataset.region === regionFilter);
    });
    legendEl.querySelectorAll('button').forEach(btn => {
      btn.classList.toggle('is-on', btn.dataset.region === regionFilter);
    });
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
      const dimmed = !ok || (corridorSet !== null && corridorSet.indexOf(abbr) === -1);
      stateEls[abbr].classList.toggle('is-dim', dimmed);
    });

    if (activeCorridor) {
      statusEl.textContent = activeCorridor.name + ' · ' + activeCorridor.states.length + ' 个州';
    } else if (query.trim()) {
      statusEl.textContent = '搜索「' + query.trim() + '」· ' + count + ' 个结果';
    } else if (regionFilter !== 'all') {
      statusEl.textContent = REGIONS[regionFilter].name + ' · ' + count + ' 个州';
    } else {
      statusEl.textContent = '51 个州与特区 · 全美视野';
    }
  }

  /* ---------- 随机漫游 ---------- */
  function randomState() {
    let pool = Object.keys(stateEls).filter(abbr => !stateEls[abbr].classList.contains('is-dim'));
    if (!pool.length) {
      setRegionFilter('all');
      pool = Object.keys(stateEls);
    }
    pool = pool.filter(abbr => abbr !== selected);
    if (!pool.length) pool = Object.keys(stateEls);
    const pick = pool[Math.floor(Math.random() * pool.length)];
    selectState(pick, true);
    flashState(pick);
    if (window.innerWidth <= 1120) {
      panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  function flashState(abbr) {
    const el = stateEls[abbr];
    if (!el) return;
    el.classList.remove('is-flash');
    void el.getBoundingClientRect();
    el.classList.add('is-flash');
    setTimeout(() => el.classList.remove('is-flash'), 900);
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
        hoverState(abbr);
        const r = btn.getBoundingClientRect();
        placeTooltip(r.left + r.width / 2, r.top - 6, false);
      });
      btn.addEventListener('mouseleave', hideTooltip);
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
        if (activeCorridor && activeCorridor.id === card.dataset.id) {
          exitCorridor(true);
        } else {
          enterCorridor(card.dataset.id);
        }
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

    Object.values(stateEls).forEach(el => {
      el.classList.remove('is-corridor');
      el.style.animationDelay = '';
    });
    corridor.states.forEach((abbr, i) => {
      const el = stateEls[abbr];
      if (!el) return;
      el.classList.add('is-corridor');
      el.style.animationDelay = (i * 0.13) + 's';
    });

    corridorGrid.querySelectorAll('.corridor-card').forEach(card => {
      card.classList.toggle('is-on', card.dataset.id === id);
    });

    cbName.textContent = corridor.name;
    cbDesc.textContent = corridor.desc;
    banner.hidden = false;
    applyFilters();

    if (window.innerWidth > 1120) {
      document.getElementById('mapCard').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  function exitCorridor(scrollBack) {
    activeCorridor = null;
    Object.values(stateEls).forEach(el => {
      el.classList.remove('is-corridor');
      el.style.animationDelay = '';
    });
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
    if (activeCorridor) {
      exitCorridor(false);
    } else if (query) {
      query = '';
      searchInput.value = '';
      searchInput.blur();
      applyFilters();
    } else if (selected) {
      clearSelection();
    }
  });

  // 点击地图空白处 / 页面其他区域时隐藏提示
  window.addEventListener('scroll', hideTooltip, { passive: true });

  /* ---------- 启动 ---------- */
  buildChips();
  buildLegend();
  buildSmallStates();
  buildCorridors();
  renderPanel(null);
  applyFilters();

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
