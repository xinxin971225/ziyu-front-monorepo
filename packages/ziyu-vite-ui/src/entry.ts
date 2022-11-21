import { App } from 'vue'
import SFCButton from './button/SFCButton.vue'
import JSXButton from './button/JSXButton'
import ZiYuButton from './button'
import 'uno.css'

// 组件库应该支持按需引入与全部注册
export { SFCButton, JSXButton, ZiYuButton }

export default {
  install: (app: App) => {
    app.component(SFCButton.name, SFCButton)
    app.component(JSXButton.name, JSXButton)
    app.component(ZiYuButton.name, ZiYuButton)
  },
}
