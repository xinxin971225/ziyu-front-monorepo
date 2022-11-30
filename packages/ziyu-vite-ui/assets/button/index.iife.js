var button=function(e,o){"use strict";var t=document.createElement("style");t.textContent='*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}.cursor-pointer,[cursor-pointer=\"\"]{cursor:pointer;}.rounded-lg,[rounded-lg=\"\"]{border-radius:0.5rem;}.border-solid,[border-solid=\"\"]{border-style:solid;}.p-3,[p-3=\"\"]{padding:0.75rem;}.px-4,[px-4=\"\"]{padding-left:1rem;padding-right:1rem;}.py-2,[py-2=\"\"]{padding-top:0.5rem;padding-bottom:0.5rem;}.font-semibold,[font-semibold=\"\"]{font-weight:600;}.hover\:text-white:hover,.text-white,[hover\:text-white=\"\"]:hover,[text-white=\"\"]{--un-text-opacity:1;color:rgba(255,255,255,var(--un-text-opacity));}\n',document.head.appendChild(t);const n={color:{type:String,default:"blue"},plain:{type:Boolean,default:!1},icon:{type:String,default:""}},l=o.defineComponent({name:"JSXButton",props:n,setup:(e,{slots:t})=>()=>o.createVNode("button",{class:`\n    py-2\n    px-4\n    font-semibold\n    rounded-lg\n    ${e.plain?`text-${e.color}-500 hover:text-white `:"text-white "}\n    ${e.plain?` bg-${e.color}-100 hover:bg-${e.color}-500 `:` bg-${e.color}-500 hover:bg-${e.color}-400 `}\n    border-solid\n    ${e.plain?`border-${e.color}-500`:`hover:border-${e.color}-400 border-${e.color}-500`}\n    cursor-pointer\n    `},[""!==e.icon?o.createVNode("i",{class:`i-ic-baseline-${e.icon} p-3`},null):"",t.default?t.default():""])}),r={install:e=>{e.component(l.name,l)}};return e.Button=l,e.default=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}}),e}({},Vue);
//# sourceMappingURL=index.iife.js.map
