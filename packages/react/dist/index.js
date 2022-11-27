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

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  App: () => App
});
module.exports = __toCommonJS(src_exports);

// ../tokens/dist/index.mjs
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

// src/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { style: { color: colors["gray-500"] }, children: "Hello world" });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  App
});
