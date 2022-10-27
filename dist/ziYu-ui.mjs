import { openBlock, createElementBlock, defineComponent, createVNode, createTextVNode, h } from "vue";
const _sfc_main = {
  name: "SFCButton"
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", null, "mySFCButton");
}
const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const JSXButton = defineComponent({
  name: "JSXButton",
  render() {
    return createVNode("button", null, [createTextVNode("myJSXButton")]);
  }
});
const ZiYuButton = defineComponent({
  name: "ZiYuButton",
  render() {
    return h("button", null, "ziyuButton");
  }
});
const entry = {
  install: (app) => {
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
    app.component(ZiYuButton.name, ZiYuButton);
  }
};
export {
  JSXButton,
  SFCButton,
  ZiYuButton,
  entry as default
};
