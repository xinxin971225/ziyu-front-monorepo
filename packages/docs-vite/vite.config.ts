import { defineConfig } from 'vite'
import { presetUno, presetIcons, presetAttributify } from 'unocss'
import UnoCss from 'unocss/vite'
// 单纯的vue3.0的包是不支持sfc语法的，这个过程需要编译，也就是plugin的目的
import vue from '@vitejs/plugin-vue'

// import commonjs from '@rollup/plugin-commonjs'
export default defineConfig({
  plugins: [
    vue(),
    UnoCss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons() /** 添加图标预设 查找链接 https://icones.js.org/ */,
      ],
    }),
  ],
})
