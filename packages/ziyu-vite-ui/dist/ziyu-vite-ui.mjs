import { openBlock, createElementBlock, renderSlot, defineComponent, createVNode, h } from "vue";
const _export_sfc = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props2) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  name: "SFCButton"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", null, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const props = {
  color: {
    type: String,
    default: "blue"
  },
  plain: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ""
  }
};
const JSXButton = defineComponent({
  name: "JSXButton",
  props,
  setup(props2, {
    slots
  }) {
    return () => createVNode("button", {
      "class": `
    py-2
    px-4
    font-semibold
    rounded-lg
    ${props2.plain ? `text-${props2.color}-500 hover:text-white ` : "text-white "}
    ${props2.plain ? ` bg-${props2.color}-100 hover:bg-${props2.color}-500 ` : ` bg-${props2.color}-500 hover:bg-${props2.color}-400 `}
    border-solid
    ${props2.plain ? `border-${props2.color}-500` : `hover:border-${props2.color}-400 border-${props2.color}-500`}
    cursor-pointer
    `
    }, [props2.icon !== "" ? createVNode("i", {
      "class": `i-ic-baseline-${props2.icon} p-3`
    }, null) : "", slots.default ? slots.default() : ""]);
  }
});
const ZiYuButton = defineComponent({
  name: "ZiYuButton",
  render() {
    return h(
      "button",
      {
        class: "border-red-500"
      },
      "ziyuButton"
    );
  }
});
const __uno = "";
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
//# sourceMappingURL=ziyu-vite-ui.mjs.map
