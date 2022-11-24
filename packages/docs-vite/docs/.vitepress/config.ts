/**
 * / 路径指向 index.md于vite.config.ts所在的跟路径 当前项目指向docs文件夹
 * link以 / 结尾会读取匹配路径名下的index.md文件
 * 不以 / 结尾会匹配最后一个单词的md文件如："/components/button" -> "/components/button.md"
 * 当文件夹下同事存在 component/button/index.md 与 component/button.md 时，优先级不确定，会读取出错
 */
const sidebar = {
  '/': [
    { text: '快速开始', items: [{ text: '简介', link: '/' }] },
    {
      text: '通用',
      items: [{ text: 'Button 按钮', link: '/components/button' }],
    },
    { text: '导航', items: [] },
    { text: '反馈', items: [] },
    { text: '数据录入', items: [] },
    { text: '数据展示', items: [] },
    { text: '布局', items: [] },
  ],
}

const config = {
  themeConfig: {
    sidebar,
  },
  markdown: {
    config: (md: any) => {
      // 添加DemoBlock插槽
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin)
    },
  },
}
export default config
