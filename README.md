# CereNexus Docs

CereNexus 社区文档站源码仓库 —— 《给小白看的 API 扫盲指南》入门教程。

使用 [VitePress](https://vitepress.dev/) 构建，通过 GitHub Actions 自动发布到 GitHub Pages。

| 项目 | 地址 |
| --- | --- |
| 线上站点 | **https://docs.cerenexus.cc/** |
| 仓库 | https://github.com/waslesy/cerenexus-docs |

## 我需要做什么？

| 我想… | 去哪里 |
| --- | --- |
| 修改某篇文章的错别字/内容 | 打开线上页面点「在 GitHub 上编辑此页」，或直接在 GitHub 网页版编辑 `docs/beginner/*.md`，提交后自动发布 |
| 新增一章 | 在 `docs/beginner/` 下新建 `第X章.md`，并在 `docs/.vitepress/config.js` 的 `sidebar` 里加一行 |
| 参与贡献但不方便直接改 | Fork 仓库 → 改 → 提 Pull Request，会自动跑构建检查 |
| 本地预览 | `npm ci` 然后 `npm run dev` |

详细流程见 [CONTRIBUTING.md](./CONTRIBUTING.md)。

## 目录结构

```
docs/
├── index.md                 # 首页（含自定义玻璃质感样式）
├── beginner/                # 入门教程：引言 + 第一章 ~ 第十四章
│   └── images/              # 文章配图（约 15 MB，请勿压缩或删除）
├── advanced/                # 进阶教程（占位，待补充）
├── public/
│   ├── CNAME                # 自定义域名 docs.cerenexus.cc
│   └── html_demos/          # 10 个独立交互式 HTML 演示，通过 iframe 嵌入正文
└── .vitepress/
    ├── config.js            # 站点配置：导航、侧边栏、base、编辑链接
    └── theme/               # 自定义主题（custom.css / index.js）
```

## 本地开发

```bash
npm ci          # 安装依赖（请使用 npm ci，保持 lock 文件一致）
npm run dev     # 本地预览 http://localhost:5173
npm run build   # 生产构建，输出到 docs/.vitepress/dist
```

要求 Node.js 18+（CI 使用 Node.js 22）。

## 部署

- 推送到 `main` → `.github/workflows/deploy.yml` 自动构建并发布
- 也可在仓库 Actions 页面手动触发 `Deploy VitePress site to GitHub Pages`
- Pull Request → `.github/workflows/check.yml` 只做构建检查，不发布
- 构建失败时不会执行发布（`deploy` job 依赖 `build` job）

## 关于 `base` 路径

站点绑定在 `docs.cerenexus.cc` 根路径下，`config.js` 中 `base` 默认 `'/'`，**一般不需要改**。

若将来需要临时部署到 GitHub Pages 的项目子路径（如 `/cerenexus-docs/`），构建时设置环境变量即可，无需改动任何 Markdown：

```bash
SITE_BASE=/cerenexus-docs/ npm run build
```

另外 `config.js` 里有一个很小的 markdown-it 钩子 `rewriteRootPathsInHtml`：VitePress 默认只处理 Markdown 语法和主题资源，不会给 Markdown 原始 HTML 补 base，这个钩子负责给 `<iframe src="/html_demos/...">` 这类根绝对路径加前缀（`base` 为 `/` 时自动跳过，不做任何改动）。
**新增交互式演示时按 `src="/html_demos/文件名.html"` 写即可**，不要删掉这个钩子。

## 许可

内容版权归 CereNexus 社区所有。
