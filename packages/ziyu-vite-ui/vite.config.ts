import { defineConfig, BuildOptions } from 'vite'
// 单纯的vue3.0的包是不支持sfc语法的，这个过程需要编译，也就是plugin的目的
import vue from '@vitejs/plugin-vue'
// Jsx也同样默认不支持需要plugin进行解析处理位template
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
import useUnoCss from './config/unocss'
// import commonjs from '@rollup/plugin-commonjs'

// rollup 打包配置
const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue',
    },
    assetFileNames: 'style.css', //https://rollupjs.org/guide/en/#outputassetfilenames
  },
  // plugins: [commonjs()],
}

export const buildConfig: BuildOptions = {
  rollupOptions,
  minify: 'terser', // boolean | 'terser' | 'esbuild'
  sourcemap: true, // 输出单独 source文件
  cssCodeSplit: true,
  lib: {
    entry: './entry.ts',
    name: 'ZiYuUI',
    // 导出模块格式
    formats: ['es', 'umd', 'iife'],
  },
}

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      tsConfigFilePath: './tsconfig.json',
    }),
    vue(),
    vueJsx(),
    useUnoCss(),
  ],

  // 添加库模式配置

  build: buildConfig,
})
