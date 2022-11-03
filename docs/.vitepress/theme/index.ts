import DefaultTheme from "vitepress/theme";
import ZiYuUI from "../../../src/entry";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ZiYuUI);
  },
};
