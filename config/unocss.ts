import { presetUno, presetIcons, presetAttributify } from "unocss";
import UnoCss from "unocss/vite";

const colorsSafeList: string[] = [
  "white",
  "black",
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];

const safelist = [
  ...colorsSafeList
    .map((color) => [
      `bg-${color}-500`,
      `text-${color}-500`,
      `bg-${color}-100`,
      `border-${color}-500`,
      `border-${color}-400`,
    ])
    .flat(),
  ...colorsSafeList
    .map((color) => [
      `hover:bg-${color}-400`,
      `hover:bg-${color}-500`,
      `hover:border-${color}-400`,
    ])
    .flat(),
];

export default () =>
  UnoCss({
    safelist,
    presets: [presetUno(), presetAttributify(), presetIcons()],
  });
