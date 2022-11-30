import DefaultTheme from 'vitepress/theme'
import ZiYuUI from 'ziyu-vite-ui'
import 'ziyu-vite-ui/dist/style.css'
import { App } from 'vue'
import 'unocss'
// 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css'
// 插件的组件，主要是demo组件
// TODO -> 已经没有人维护了，考虑写一个自己适用或者帮他维护
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.use(ZiYuUI)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  },
}
