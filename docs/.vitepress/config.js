// 站点已绑定自定义域名 https://docs.cerenexus.cc/，部署在根路径。
// 如需临时部署到 GitHub Pages 项目子路径（/cerenexus-docs/），
// 构建时设置 SITE_BASE=/cerenexus-docs/ 即可，无需改动文档。
const base = process.env.SITE_BASE || '/'

// VitePress 会自动为 Markdown 链接、图片和主题资源加上 base，但不会处理
// Markdown 中的原始 HTML。文档里的交互式演示用 <iframe src="/html_demos/...">
// 这样的根绝对路径，这里统一补上 base（默认 '/' 时不做任何改动）。
function rewriteRootPathsInHtml(md) {
  if (base === '/') return
  const rewrite = (content) =>
    content.replace(/(\s(?:src|href))="\/(?!\/)/g, `$1="${base}`)
  for (const rule of ['html_block', 'html_inline']) {
    const original = md.renderer.rules[rule]
    md.renderer.rules[rule] = (tokens, idx, options, env, self) => {
      tokens[idx].content = rewrite(tokens[idx].content)
      return original ? original(tokens, idx, options, env, self) : tokens[idx].content
    }
  }
}

export default {
  base,
  title: 'CereNexus API 入门教程',
  description: '给小白看的API扫盲指南',
  markdown: {
    config: rewriteRootPathsInHtml
  },
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/waslesy/cerenexus-docs/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    lastUpdated: {
      text: '最后更新于'
    },
    nav: [
      { text: '入门教程', link: '/beginner/' },
      { text: '进阶教程', link: '/advanced/' }
    ],
    sidebar: {
      '/beginner/': [
        {
          text: 'API 入门教程',
          items: [
            { text: '引言', link: '/beginner/引言' },
            { text: '第一章：API 是什么', link: '/beginner/第一章' },
            { text: '第二章：模型是什么', link: '/beginner/第二章' },
            { text: '第三章：十个学生', link: '/beginner/第三章' },
            { text: '第四章：怎么选模型', link: '/beginner/第四章' },
            { text: '第五章：Prompt 怎么写', link: '/beginner/第五章' },
            { text: '第六章：上下文窗口', link: '/beginner/第六章' },
            { text: '第七章：注意力机制', link: '/beginner/第七章' },
            { text: '第八章：API 命名', link: '/beginner/第八章' },
            { text: '第九章：对话结构', link: '/beginner/第九章' },
            { text: '第十章：分词器', link: '/beginner/第十章' },
            { text: '第十一章：调参', link: '/beginner/第十一章' },
            { text: '第十二章：流式输出', link: '/beginner/第十二章' },
            { text: '第十三章：KV Cache', link: '/beginner/第十三章' },
            { text: '第十四章：Token 计费', link: '/beginner/第十四章' }
          ]
        }
      ],
      '/advanced/': [
        {
          text: '进阶教程',
          items: [
            { text: '即将上线', link: '/advanced/' }
          ]
        }
      ]
    }
  }
}
