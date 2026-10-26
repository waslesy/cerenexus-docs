# 参与贡献

感谢你帮 CereNexus 文档变得更好。内容全部是 Markdown，改起来不需要懂代码。

## 一、最简单的改法（无需本地环境）

1. 打开线上页面，点击页面底部或右上角的 **「在 GitHub 上编辑此页」**；
   也可以直接在 GitHub 仓库里找到 `docs/beginner/第X章.md`。
2. 点铅笔图标编辑。
3. 写完在下方填一句修改说明，选择 **Create a new branch for this commit and start a pull request**。
4. 提交 Pull Request。维护者合并后，网站会在 1~2 分钟内自动更新。

> 如果你有仓库写权限，也可以直接提交到 `main`，同样会自动发布。

## 二、本地预览（推荐用于较大改动）

```bash
git clone https://github.com/waslesy/cerenexus-docs.git
cd cerenexus-docs
npm ci
npm run dev      # 打开 http://localhost:5173
```

改完确认无误再提交。`npm run build` 可验证生产构建是否通过。

## 三、写作约定

- 每章一个文件，放在 `docs/beginner/`，文件名如 `第十五章.md`。
- 新增章节后，需要在 `docs/.vitepress/config.js` 的 `sidebar['/beginner/']` 里增加一行：
  `{ text: '第十五章：标题', link: '/beginner/第十五章' }`
- 图片放到 `docs/beginner/images/`，用相对路径引用：`![说明](images/文件名.jpg)`。
  仓库里已有的图片体积较大（合计约 15 MB），**请勿压缩或删除**，也不要整体替换。
- 交互式演示放到 `docs/public/html_demos/`，在正文里用 iframe 嵌入：

  ```html
  <iframe src="/html_demos/演示文件名.html" style="width:100%;height:520px;border:0;"></iframe>
  ```

  写根绝对路径 `/html_demos/...` 即可，构建时会自动适配 GitHub Pages 子路径。
- 演示文件请保持单文件自包含（CSS/JS 内联），不要依赖外部 CDN。

## 四、Pull Request 流程

1. Fork 本仓库（或直接在原仓库建分支）。
2. 修改内容并提交。
3. 发起 PR 到 `main` 分支。
4. GitHub Actions 会自动运行 **Build Check**，只有构建通过才能合并。
5. 维护者 Review 后合并，合并即自动部署。

## 五、不要提交的内容

- 真实的 API Key、Token、密码、私钥。示例请写成 `sk-xxxxxxxxxxxxxxxx` 这类占位符。
- `node_modules/`、`docs/.vitepress/dist/`、`docs/.vitepress/cache/`（已在 `.gitignore` 中）。
- 与本次修改无关的大规模格式化。
