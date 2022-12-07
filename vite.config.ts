/// <reference types="vitest" />

import { defineConfig } from 'vite'
// 单纯的vue3.0的包是不支持sfc语法的，这个过程需要编译，也就是plugin的目的
import vue from '@vitejs/plugin-vue'
// Jsx也同样默认不支持需要plugin进行解析处理位template
import vueJsx from '@vitejs/plugin-vue-jsx'
import { presetUno, presetIcons, presetAttributify } from 'unocss'
import UnoCss from 'unocss/vite'
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    UnoCss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons() /** 添加图标预设 查找链接 https://icones.js.org/ */,
      ],
    }),
  ],
  //测试
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',
    // 支持tsx组件，很关键
    transformMode: {
      web: [/\.[tj]sx$/],
    },
    coverage: {
      provider: 'istanbul', // or 'c8',
      reporter: ['text', 'json', 'html'],
    },
  },
})
