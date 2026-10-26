# CereNexus Docs

CereNexus 社区文档站源码仓库 —— 《给小白看的 API 扫盲指南》入门教程。

使用 [VitePress](https://vitepress.dev/) 构建，通过 GitHub Actions 自动发布到 GitHub Pages。

| 项目 | 地址 |
| --- | --- |
| GitHub Pages（当前预览） | https://waslesy.github.io/cerenexus-docs/ |
| 正式域名（尚未切换） | https://docs.cerenexus.cc/ |

## 我需要做什么？

| 我想… | 去哪里 |
| --- | --- |
| 修改某篇文章的错别字/内容 | 打开对应 Markdown，点右上角「在 GitHub 上编辑此页」，或用 GitHub 网页版直接编辑，提交后自动发布 |
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
├── public/html_demos/       # 10 个独立交互式 HTML 演示，通过 iframe 嵌入正文
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

- 推送到 `main` 分支 → `.github/workflows/deploy.yml` 自动构建并发布到 GitHub Pages
- 也可以在仓库 Actions 页面手动触发 `Deploy VitePress site to GitHub Pages`（`workflow_dispatch`）
- Pull Request → `.github/workflows/check.yml` 只做构建检查，不会发布
- 构建失败时不会执行发布步骤（`deploy` job 依赖 `build` job）

## 关于 `base` 路径

GitHub Pages 项目站点的访问路径是 `/cerenexus-docs/`，而正式域名是根路径，两者不同。
`docs/.vitepress/config.js` 用环境变量 `SITE_BASE` 统一控制：

- 默认（CI 构建）：`base = '/cerenexus-docs/'`
- 本地 `npm run dev`：`base = '/'`
- 将来绑定 `docs.cerenexus.cc` 后：把工作流里的构建命令改为 `SITE_BASE=/ npm run build`，即可恢复根路径部署，**不需要改动任何 Markdown**。

另有一个很小的 markdown-it 插件（`rewriteRootPathsInHtml`）负责给 Markdown 原始 HTML 中的
`<iframe src="/html_demos/...">` 补上 base 前缀 —— VitePress 默认只处理 Markdown 语法和主题资源，
不处理原始 HTML 里的根绝对路径。新增交互式演示时按 `src="/html_demos/文件名.html"` 写即可，插件会自动适配。

## 许可

内容版权归 CereNexus 社区所有。
