import { defineConfig } from 'vite'
// 单纯的vue3.0的包是不支持sfc语法的，这个过程需要编译，也就是plugin的目的
import vue from '@vitejs/plugin-vue'

// import commonjs from '@rollup/plugin-commonjs'
export default defineConfig({
  plugins: [vue()],
})
