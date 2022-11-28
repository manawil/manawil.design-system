var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

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
var fontFamilies = {
  default: "DM Sans, sans-serif"
};
var fontWeights = {
  regular: 400,
  medium: 500,
  bold: 700
};
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
var lineHeights = {
  shorter: "120%",
  short: "140%",
  tall: "160%",
  taller: "180%"
};
var borderRadius = {
  "rounded-xs": "4px",
  "rounded-sm": "8px",
  "rounded-md": "16px",
  "rounded-full": "999px"
};
var borderWidths = {
  thin: "1px",
  mid: "2px",
  thick: "4px"
};
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
var zIndices = {
  overlay: 9995,
  modal: 9999
};

// src/styles/index.ts
import { createStitches, defaultThemeMap } from "@stitches/react";
var {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  themeMap: __spreadProps(__spreadValues({}, defaultThemeMap), {
    width: "spacing",
    height: "spacing"
  }),
  theme: {
    colors,
    fontSizes,
    fontWeights,
    lineHeights,
    borderWidths,
    fonts: fontFamilies,
    radii: borderRadius,
    space: spacing,
    zIndices
  },
  media: {
    web: "(max-width: 1280px)",
    medium: "(max-width: 992px)",
    mobile: "(max-width: 768px)"
  }
});

// src/components/form/button.tsx
var Button = styled("button", {
  all: "unset",
  borderRadius: "$rounded-xs",
  fontSize: "$sm",
  fontWeight: "$bold",
  fontFamily: "$default",
  textAlign: "center",
  minWidth: 96,
  height: 38,
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",
  cursor: "pointer",
  padding: "0 $4",
  textTransform: "uppercase",
  transition: "all 0.2s",
  svg: {
    width: "$4",
    height: "$4"
  },
  "&:disabled": {
    opacity: 0.6,
    cursor: "auto"
  },
  variants: {
    variant: {
      primary: {
        color: "$gray-50",
        backgroundColor: "$primary-300",
        "&:not(:disabled):hover": {
          backgroundColor: "$primary-400"
        }
      },
      secondary: {
        color: "$gray-50",
        backgroundColor: "$secondary-500",
        "&:not(:disabled):hover": {
          backgroundColor: "$secondary-600"
        }
      },
      outline: {
        color: "$primary-300",
        borderWidth: "$thin",
        borderStyle: "solid",
        borderColor: "$primary-300",
        "&:not(:disabled):hover": {
          color: "$gray-50",
          backgroundColor: "$primary-300"
        }
      },
      danger: {
        color: "$gray-50",
        backgroundColor: "$danger-light",
        "&:not(:disabled):hover": {
          backgroundColor: "$danger-dark"
        }
      },
      ghost: {
        color: "$primary-300",
        backgroundColor: "transparent",
        "&:not(:disabled):hover": {
          backgroundColor: "$gray-100"
        }
      }
    }
  },
  defaultVariants: {
    variant: "primary"
  }
});
export {
  Button
};
