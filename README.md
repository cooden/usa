# 美国文化地图 · A Cultural Atlas of the United States

一张可以「悬停点亮」的美国文化地图：50 个州 + 华盛顿特区，每个州一张文化名片——一种声音、一道食物、一处地标、一个人物。

- **最终版**：[`index.html`](index.html) — 白色纸感、区域筛选、搜索、文化走廊、详情面板
- **效果简版**：[`simple/index.html`](simple/index.html) — 浅色纸感、单页、基础悬停与详情

![预览](assets/preview.jpg)

## 两个版本的区别

| | 最终版 | 效果简版 |
| --- | --- | --- |
| 视觉 | 白色主题、四区配色、光晕与网格纹理 | 浅色纸感、极简排版 |
| 悬停 | 变色 + 抬升 + 发光 + 其余州变暗 + 跟随提示 | 变色 + 抬升 + 其余州变淡 + 跟随提示 |
| 点击 | 右侧面板展开完整文化名片，URL 记录 `#state-CA` | 地图下方展开文化名片 |
| 进阶 | 四大文化区筛选、图例联动、全文搜索、随机漫游、6 条文化走廊 | 无 |
| 依赖 | 无运行时依赖 | 无运行时依赖 |

## 主要功能

- **51 个州与特区**：全部可悬停、可点击、可用键盘（`Tab` + `Enter`）操作
- **悬停反馈**：州填色切换为所属文化区的高亮色，轻微放大并带发光；其余州自动变暗
- **文化名片**：别称、三个标签、一句话解读、音乐 / 食物 / 地标 / 人物 / 代表城市
- **区域筛选**：东北部、中西部、南部、西部，工具栏与图例双向联动
- **全文搜索**：支持中文州名、英文名、音乐、食物、地标、人物、标签
- **随机漫游**：随机抽取一个州并展开
- **文化走廊**：蓝调与灵魂之路、66 号公路、阿巴拉契亚民谣线、太平洋岸线、新英格兰文脉、西语边境文化，一次点亮多个州
- **小州快捷条**：罗德岛、特拉华、华盛顿特区等小面积州可一键选中
- **响应式**：手机端筛选自动换行，点击后自动滚动到详情
- **完全离线可用**：直接双击 `index.html` 即可，无需服务器或网络

## 本地预览

直接双击 `index.html`。也可以起一个静态服务器：

```bash
python -m http.server 8080
```

然后访问 <http://localhost:8080/>。

## 目录结构

```
.
├── index.html              # 最终版
├── styles.css              # 最终版样式
├── app.js                  # 最终版交互
├── simple/
│   └── index.html          # 效果简版（单文件，内联样式与脚本）
└── assets/
    ├── data.js             # 51 州文化数据 + 6 条文化走廊
    ├── us-paths.js         # 预生成的州界 SVG path
    ├── fips.js             # FIPS 州代码映射
    └── preview.jpg         # README 预览图
```

## 发布到 GitHub Pages

1. 在 GitHub 新建一个空仓库（例如 `us-culture-map`），不要勾选初始化 README。
2. 在本目录执行：

```bash
git init
git add .
git commit -m "feat: 美国文化地图（最终版 + 简版）"
git branch -M main
git remote add origin https://github.com/<你的用户名>/us-culture-map.git
git push -u origin main
```

3. 打开仓库 **Settings → Pages**，Source 选择 **Deploy from a branch**，分支选 `main`，目录选 `/ (root)`，保存。
4. 一两分钟后访问 `https://<你的用户名>.github.io/us-culture-map/`。

页面全部使用相对路径，部署在仓库子路径下也能正常工作。简版地址为 `/simple/`。

## 数据与说明

- 州界：基于 [U.S. Atlas](https://github.com/topojson/us-atlas) 的 `states-albers-10m` 数据（Natural Earth），采用 Albers USA 投影，已预先转换为 SVG path，运行时不加载任何地图库。
- 文化条目：依据公共文化常识整理，用于展示与学习，并非学术统计口径。
- 文化区划分：参照美国人口普查局的 Northeast / Midwest / South / West 四分法。
- 页面不收集任何数据，无第三方脚本、无追踪。
