!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],o):o((e="undefined"!=typeof globalThis?globalThis:e||self).button={},e.Vue)}(this,(function(e,o){"use strict";var t=document.createElement("style");t.textContent='#--unocss--{layer:__ALL__}#--unocss-hash--{content:"69d2ca86"}\n',document.head.appendChild(t);const n={color:{type:String,default:"blue"},plain:{type:Boolean,default:!1},icon:{type:String,default:""}},l=o.defineComponent({name:"JSXButton",props:n,setup:(e,{slots:t})=>()=>o.createVNode("button",{class:`\n    py-2\n    px-4\n    font-semibold\n    rounded-lg\n    ${e.plain?`text-${e.color}-500 hover:text-white `:"text-white "}\n    ${e.plain?` bg-${e.color}-100 hover:bg-${e.color}-500 `:` bg-${e.color}-500 hover:bg-${e.color}-400 `}\n    border-solid\n    ${e.plain?`border-${e.color}-500`:`hover:border-${e.color}-400 border-${e.color}-500`}\n    cursor-pointer\n    `},[""!==e.icon?o.createVNode("i",{class:`i-ic-baseline-${e.icon} p-3`},null):"",t.default?t.default():""])}),r={install:e=>{e.component(l.name,l)}};e.Button=l,e.default=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
//# sourceMappingURL=index.umd.cjs.map