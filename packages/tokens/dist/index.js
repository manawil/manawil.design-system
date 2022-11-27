"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  borderRadius: () => borderRadius,
  borderWidths: () => borderWidths,
  colors: () => colors,
  fontFamilies: () => fontFamilies,
  fontSizes: () => fontSizes,
  fontWeights: () => fontWeights,
  lineHeights: () => lineHeights,
  spacing: () => spacing,
  zIndices: () => zIndices
});
module.exports = __toCommonJS(src_exports);

// src/colors.ts
var colors = {
  "primary-50": "#DEECFF",
  "primary-100": "#BAD6FF",
  "primary-200": "#82B5FF",
  "primary-300": "#549AFF",
  "primary-400": "#217CFF",
  "primary-500": "#005CE1",
  "primary-600": "#004BB7",
  "primary-700": "#003C93",
  "primary-800": "#002F72",
  "primary-900": "#00204E",
  "secondary-50": "#FFF2C0",
  "secondary-100": "#FFE78C",
  "secondary-200": "#FFDE66",
  "secondary-300": "#FFD94A",
  "secondary-400": "#FFD229",
  "secondary-500": "#FBC80B",
  "secondary-600": "#E5B400",
  "secondary-700": "#C59A00",
  "secondary-800": "#A38000",
  "secondary-900": "#7A6000",
  "gray-50": "#F4F4F4",
  "gray-100": "#EAEAEA",
  "gray-200": "#DDDDDD",
  "gray-300": "#BCBCBC",
  "gray-400": "#969696",
  "gray-500": "#787878",
  "gray-600": "#606060",
  "gray-700": "#484848",
  "gray-800": "#323232",
  "gray-900": "#222222",
  "success-light": "#04D361",
  "success-dark": "#1B873F",
  "danger-light": "#F75A68",
  "danger-dark": "#CC2937"
};

// src/font-families.ts
var fontFamilies = {
  default: "DM Sans, sans-serif"
};

// src/font-weights.ts
var fontWeights = {
  regular: 400,
  medium: 500,
  bold: 700
};

// src/font-sizes.ts
var fontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.25rem",
  xl: "1.5rem",
  "2xl": "2rem",
  "3xl": "3rem",
  "4xl": "4rem"
};

// src/line-heights.ts
var lineHeights = {
  shorter: "120%",
  short: "140%",
  tall: "160%",
  taller: "180%"
};

// src/border-radius.ts
var borderRadius = {
  "rounded-xs": "4px",
  "rounded-sm": "8px",
  "rounded-md": "16px",
  "rounded-full": "999px"
};

// src/border-widths.ts
var borderWidths = {
  thin: "1px",
  mid: "2px",
  thick: "4px"
};

// src/spacing.ts
var spacing = {
  0: "0",
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  40: "7rem"
};

// src/z-indices.ts
var zIndices = {
  overlay: 9995,
  modal: 9999
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  borderRadius,
  borderWidths,
  colors,
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  spacing,
  zIndices
});
