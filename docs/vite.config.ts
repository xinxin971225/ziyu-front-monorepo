import { defineConfig } from "vite";
// Jsx也同样默认不支持需要plugin进行解析处理位template
import vueJsx from "@vitejs/plugin-vue-jsx";
import useUnoCss from "../config/unocss";

export default defineConfig({
  plugins: [vueJsx(), useUnoCss()],
});
