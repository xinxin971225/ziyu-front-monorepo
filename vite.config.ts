import { defineConfig } from "vite";
// 单纯的vue3.0的包是不支持sfc语法的，这个过程需要编译，也就是plugin的目的
import vue from "@vitejs/plugin-vue";
// Jsx也同样默认不支持需要plugin进行解析处理位template
import vueJsx from "@vitejs/plugin-vue-jsx";
import useUnoCss from "./config/unocss";

// rollup 打包配置
const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
    assetFileNames: "style.css", //https://rollupjs.org/guide/en/#outputassetfilenames
  },
};

export default defineConfig({
  plugins: [vue(), vueJsx(), useUnoCss()],

  // 添加库模式配置

  build: {
    rollupOptions,
    cssCodeSplit: true,
    minify: false,
    lib: {
      entry: "./src/entry.ts",
      name: "ZiYuUI",
      // 导出模块格式
      formats: ["es", "umd", "iife"],
    },
  },
});
