var ZiYuUI = function(exports, vue) {
  "use strict";
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
    return vue.openBlock(), vue.createElementBlock("button", null, "mySFCButton");
  }
  const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
  const JSXButton = vue.defineComponent({
    name: "JSXButton",
    render() {
      return vue.createVNode("button", null, [vue.createTextVNode("myJSXButton")]);
    }
  });
  const ZiYuButton = vue.defineComponent({
    name: "ZiYuButton",
    render() {
      return vue.h("button", null, "ziyuButton");
    }
  });
  const entry = {
    install: (app) => {
      app.component(SFCButton.name, SFCButton);
      app.component(JSXButton.name, JSXButton);
      app.component(ZiYuButton.name, ZiYuButton);
    }
  };
  exports.JSXButton = JSXButton;
  exports.SFCButton = SFCButton;
  exports.ZiYuButton = ZiYuButton;
  exports.default = entry;
  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
  return exports;
}({}, Vue);
