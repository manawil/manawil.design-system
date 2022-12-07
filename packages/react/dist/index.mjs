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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/components/form/button.tsx
import { CircleNotch } from "phosphor-react";

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
  "gray-50": "#FAFAFA",
  "gray-100": "#EDEDED",
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
  medium: 600,
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
import { jsx } from "react/jsx-runtime";
var spin = keyframes({
  from: {
    transform: "rotate(0deg)"
  },
  to: {
    transform: "rotate(360deg)"
  }
});
var StyledButton = styled("button", {
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
    height: "$4",
    animation: `${spin} 1s linear infinite`,
    transition: "all 0.2s"
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
function Button({ variant, loading: loading2, children }) {
  if (loading2) {
    return /* @__PURE__ */ jsx(StyledButton, { variant, disabled: loading2, children: /* @__PURE__ */ jsx(CircleNotch, { size: 20, color: "#fff" }) });
  }
  return /* @__PURE__ */ jsx(StyledButton, { variant, children });
}

// src/components/form/checkbox.tsx
import { Check } from "phosphor-react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { jsx as jsx2 } from "react/jsx-runtime";
var CheckboxContainer = styled(RadixCheckbox.Root, {
  all: "unset",
  width: spacing[6],
  height: spacing[6],
  backgroundColor: "$gray-100",
  borderRadius: "$rounded-xs",
  lineHeight: 0,
  cursor: "pointer",
  overflow: "hidden",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderWidth: "$thin",
  borderStyle: "solid",
  borderColor: "$gray-100",
  outline: 0,
  '&[data-state="checked"]': {
    backgroundColor: "$primary-300",
    borderWidth: 0,
    "&:focus": {
      borderWidth: "$mid",
      borderStyle: "solid",
      borderColor: "$primary-100"
    }
  },
  "&:focus": {
    borderWidth: "$mid",
    borderStyle: "solid",
    borderColor: "$primary-300"
  }
});
var CheckboxIndicator = styled(RadixCheckbox.Indicator, {
  color: "$gray-50",
  width: spacing[4],
  height: spacing[4]
});
function Checkbox(props) {
  return /* @__PURE__ */ jsx2(CheckboxContainer, __spreadProps(__spreadValues({}, props), { children: /* @__PURE__ */ jsx2(CheckboxIndicator, { asChild: true, children: /* @__PURE__ */ jsx2(Check, { weight: "bold" }) }) }));
}

// src/components/form/radio-button.tsx
import * as RadioGroup from "@radix-ui/react-radio-group";
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
var RadioButtonContainer = styled(RadioGroup.Root, {
  all: "unset",
  display: "flex",
  alignItems: "center",
  gap: "$2",
  fontFamily: "$default",
  color: "$gray-800"
});
var RadioButtonItem = styled(RadioGroup.Item, {
  backgroundColor: "$gray-100",
  width: spacing[5],
  height: spacing[5],
  borderRadius: "$rounded-full",
  outline: 0,
  borderWidth: "$thin",
  borderStyle: "solid",
  borderColor: "$gray-100",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  '&[data-state="checked"]': {
    "&:focus": {
      borderWidth: "$mid",
      borderStyle: "solid",
      borderColor: "$primary-100"
    }
  },
  "&:focus": {
    borderWidth: "$mid",
    borderStyle: "solid",
    borderColor: "$primary-300"
  },
  "&:disabled": {
    cursor: "not-allowed"
  }
});
var RadioButtonIndicator = styled(RadioGroup.Indicator, {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: spacing[4],
  height: spacing[4],
  position: "relative",
  "&::after": {
    content: "",
    display: "block",
    width: spacing[3],
    height: spacing[3],
    borderRadius: "50%",
    backgroundColor: "$primary-300"
  }
});
function RadioButton(_a) {
  var _b = _a, { label, id, value } = _b, rest = __objRest(_b, ["label", "id", "value"]);
  return /* @__PURE__ */ jsxs(RadioButtonContainer, __spreadProps(__spreadValues({}, rest), { children: [
    /* @__PURE__ */ jsx3(RadioButtonItem, { id, value, children: /* @__PURE__ */ jsx3(RadioButtonIndicator, {}) }),
    /* @__PURE__ */ jsx3("label", { htmlFor: id, children: label })
  ] }));
}

// src/components/form/text-field.tsx
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
var InputContainer = styled("div", {
  minWidth: "300px"
});
var InputContent = styled("div", {
  position: "relative",
  display: "flex",
  width: "100%",
  transition: "opacity 0.2s",
  div: {
    position: "absolute",
    top: 0,
    right: "-4px",
    display: "flex",
    alignItems: "center",
    width: spacing[12],
    height: "100%",
    transition: "color 0.2s",
    cursor: "pointer"
  }
});
var Input = styled("input", {
  boxSizing: "border-box",
  appearance: "none",
  outline: 0,
  width: "100%",
  height: spacing[12],
  padding: "0 $4",
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$gray-700",
  backgroundColor: "$gray-100",
  borderWidth: "$mid",
  borderStyle: "solid",
  borderColor: "$gray-100",
  borderRadius: "$rounded-xs",
  transition: "border-color 0.2s",
  "&:hover": {
    borderWidth: "$mid",
    borderStyle: "solid",
    borderColor: "$gray-700"
  },
  "&:focus": {
    borderWidth: "$mid",
    borderStyle: "solid",
    borderColor: "$primary-300"
  },
  "&:disabled": {
    opacity: "0.5",
    cursor: "auto"
  },
  variants: {
    hasIcon: {
      true: {
        paddingRight: "$16"
      }
    },
    hasError: {
      true: {
        borderWidth: "$mid",
        borderStyle: "solid",
        borderColor: "$danger-light"
      }
    }
  }
});
function TextField(_a) {
  var _b = _a, {
    icon,
    onIconClick,
    error
  } = _b, rest = __objRest(_b, [
    "icon",
    "onIconClick",
    "error"
  ]);
  return /* @__PURE__ */ jsx4(InputContainer, { children: /* @__PURE__ */ jsxs2(InputContent, { children: [
    /* @__PURE__ */ jsx4(Input, __spreadValues({ hasIcon: Boolean(icon), hasError: Boolean(error) }, rest)),
    /* @__PURE__ */ jsx4("div", { role: onIconClick ? "button" : "", children: icon })
  ] }) });
}

// src/components/form/icon-button.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
var IconButtonContainer = styled("button", {
  border: "none",
  cursor: "pointer",
  backgroundColor: "transparent",
  lineHeight: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:disabled": {
    opacity: 0.5
  }
});
function IconButton(_a) {
  var _b = _a, { icon } = _b, rest = __objRest(_b, ["icon"]);
  return /* @__PURE__ */ jsx5(IconButtonContainer, __spreadProps(__spreadValues({ type: "button" }, rest), { children: icon }));
}

// src/components/layout/box.tsx
var Box = styled("div", {
  padding: "$4"
});
Box.displayName = "Box";

// src/components/data-display/avatar.tsx
import * as RadixAvatar from "@radix-ui/react-avatar";
import { jsx as jsx6 } from "react/jsx-runtime";
var AvatarContainer = styled(RadixAvatar.Root, {
  borderRadius: "$rounded-full",
  display: "inline-block",
  overflow: "hidden",
  fontFamily: "$default",
  fontWeight: "$regular",
  userSelect: "none",
  variants: {
    size: {
      sm: {
        width: spacing[8],
        height: spacing[8],
        fontSize: "$xs"
      },
      md: {
        width: spacing[16],
        height: spacing[16],
        fontSize: "$xl"
      },
      xl: {
        width: spacing[40],
        height: spacing[40],
        fontSize: "$3xl"
      }
    }
  }
});
var AvatarFallback = styled(RadixAvatar.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$gray-200",
  color: "$gray-800",
  svg: {
    width: spacing[6],
    height: spacing[6]
  }
});
function Avatar(_a) {
  var _b = _a, { fallback, size = "md" } = _b, rest = __objRest(_b, ["fallback", "size"]);
  return /* @__PURE__ */ jsx6(AvatarContainer, __spreadProps(__spreadValues({ size }, rest), { children: /* @__PURE__ */ jsx6(AvatarFallback, { children: fallback }) }));
}

// src/components/data-display/alert.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
var AlertContainer = styled("div", {
  padding: "0 $4 $4 $4",
  borderTopRightRadius: "$rounded-xs",
  borderBottomRightRadius: "$rounded-xs",
  fontFamily: "$default",
  variants: {
    variant: {
      success: {
        borderLeftWidth: "$tick",
        borderLeftStyle: "solid",
        borderLeftColor: "#2e7d32",
        backgroundColor: "#e3f3e4",
        color: "#388e3c"
      },
      info: {
        borderLeftWidth: "$tick",
        borderLeftStyle: "solid",
        borderLeftColor: "#1565c0",
        backgroundColor: "#d2e8fa",
        color: "#1976d2"
      },
      warning: {
        borderLeftWidth: "$tick",
        borderLeftStyle: "solid",
        borderLeftColor: "#f9a825",
        backgroundColor: "#fff9c4",
        color: "#fbc02d"
      },
      danger: {
        borderLeftWidth: "$tick",
        borderLeftStyle: "solid",
        borderLeftColor: "#c62828",
        backgroundColor: "#ffe0e3",
        color: "#d32f2f"
      }
    }
  }
});
var AlertTitleContainer = styled("p", {
  fontWeight: "$bold",
  variants: {
    variant: {
      success: {
        color: "#2e7d32"
      },
      info: {
        color: "#1565c0"
      },
      warning: {
        color: "#f9a825"
      },
      danger: {
        color: "#c62828"
      }
    }
  }
});
function AlertTitle(_a) {
  var _b = _a, { children, variant } = _b, rest = __objRest(_b, ["children", "variant"]);
  return /* @__PURE__ */ jsx7(AlertTitleContainer, __spreadProps(__spreadValues({ variant }, rest), { children }));
}
function Alert(_a) {
  var _b = _a, { variant = "info", children } = _b, rest = __objRest(_b, ["variant", "children"]);
  return /* @__PURE__ */ jsx7(AlertContainer, __spreadProps(__spreadValues({ variant }, rest), { children }));
}

// src/components/data-display/badge.tsx
var Badge = styled("span", {
  display: "inline-flex",
  borderRadius: "$rounded-full",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "$default",
  boxSizing: "border-box",
  fontSize: "$xs",
  lineHeight: "$short",
  backgroundColor: "$primary-300",
  color: "$gray-50",
  padding: "$2"
});
Badge.displayName = "Badge";

// src/components/data-display/chip.tsx
import { XCircle } from "phosphor-react";
import { jsx as jsx8, jsxs as jsxs3 } from "react/jsx-runtime";
var ChipContainer = styled("span", {
  padding: "$2 $4",
  backgroundColor: "$gray-100",
  color: "$gray-600",
  fontFamily: "$default",
  boxSizing: "border-box",
  borderRadius: "$rounded-xs",
  display: "inline-flex",
  alignItems: "center",
  transition: "opacity 0.2s",
  cursor: "pointer",
  button: {
    all: "unset",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer"
  },
  svg: {
    color: "$gray-600",
    fontSize: "$lg",
    marginLeft: "$2"
  },
  "&:hover": {
    opacity: 0.8
  }
});
function Chip(_a) {
  var _b = _a, { onDelete, children } = _b, rest = __objRest(_b, ["onDelete", "children"]);
  return /* @__PURE__ */ jsxs3(ChipContainer, __spreadProps(__spreadValues({}, rest), { children: [
    children,
    Boolean(onDelete) && /* @__PURE__ */ jsx8("button", { type: "button", onClick: onDelete, children: /* @__PURE__ */ jsx8(XCircle, { size: 16 }) })
  ] }));
}

// src/components/feedback/skeleton.tsx
import { Fragment, jsx as jsx9 } from "react/jsx-runtime";
var loading = keyframes({
  "0%, 100%": {
    opacity: 1
  },
  "50%": {
    opacity: 0.5
  }
});
var SkeletonLoading = styled("div", {
  position: "relative",
  overflow: "hidden",
  boxSizing: "border-box",
  zIndex: 1,
  borderRadius: "$rounded-xs",
  backgroundColor: "$gray-300",
  animation: `${loading} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`
});
function Skeleton({ width, height, radius, count }) {
  if (count)
    return /* @__PURE__ */ jsx9(Fragment, { children: [...Array(count)].map((_, index) => /* @__PURE__ */ jsx9(
      SkeletonLoading,
      {
        style: { width, height, borderRadius: radius }
      },
      index
    )) });
  return /* @__PURE__ */ jsx9(SkeletonLoading, { style: { width, height, borderRadius: radius } });
}

// src/components/data-display/table.tsx
import { jsx as jsx10, jsxs as jsxs4 } from "react/jsx-runtime";
var TableContainer = styled("div", {
  flex: 1,
  overflow: "auto"
});
var StyledTable = styled("table", {
  width: "100%",
  minWidth: "600px",
  borderCollapse: "collapse",
  fontFamily: "$default",
  boxSizing: "border-box",
  th: {
    backgroundColor: "transparent",
    padding: "$4",
    textAlign: "left",
    fontWeight: "$medium",
    lineHeight: "$tall",
    fontSize: "$xs",
    textTransform: "uppercase",
    color: "$gray-500"
  },
  td: {
    background: "$gray-100",
    padding: "$4",
    fontSize: "$sm",
    lineHeight: "$tall",
    color: "$gray-700",
    borderTopWidth: "$thick",
    borderTopStyle: "solid",
    borderTopColor: "$gray-50"
  }
});
function Table(_a) {
  var _b = _a, {
    columns,
    dataSource,
    loading: loading2 = false
  } = _b, rest = __objRest(_b, [
    "columns",
    "dataSource",
    "loading"
  ]);
  if (loading2)
    return /* @__PURE__ */ jsx10(TableContainer, { children: /* @__PURE__ */ jsxs4(StyledTable, { children: [
      /* @__PURE__ */ jsx10("thead", { children: /* @__PURE__ */ jsx10("tr", { children: columns.map((column) => /* @__PURE__ */ jsx10("th", { children: column.title }, column.key)) }) }),
      /* @__PURE__ */ jsx10("tbody", { children: [...Array(6)].map((_, index) => /* @__PURE__ */ jsx10("tr", { children: [...Array(columns.length)].map((__, idx) => /* @__PURE__ */ jsx10("td", { children: /* @__PURE__ */ jsx10(Skeleton, { width: "100%", height: "12px", radius: "999px" }) }, idx)) }, index)) })
    ] }) });
  return /* @__PURE__ */ jsx10(TableContainer, { children: /* @__PURE__ */ jsxs4(StyledTable, __spreadProps(__spreadValues({}, rest), { children: [
    /* @__PURE__ */ jsx10("thead", { children: /* @__PURE__ */ jsx10("tr", { children: columns.map((column) => /* @__PURE__ */ jsx10("th", { children: column.title }, column.key)) }) }),
    /* @__PURE__ */ jsx10("tbody", { children: dataSource.map((data, index) => /* @__PURE__ */ jsx10("tr", { children: columns.map((column, idx) => {
      var _a2, _b2;
      return /* @__PURE__ */ jsx10("td", { children: (_b2 = (_a2 = column == null ? void 0 : column.render) == null ? void 0 : _a2.call(column, data[column.dataIndex], data)) != null ? _b2 : data[column.dataIndex] }, idx);
    }) }, index)) })
  ] })) });
}

// src/components/navigation/breadcrumb.tsx
import { CaretRight } from "phosphor-react";
import { jsx as jsx11, jsxs as jsxs5 } from "react/jsx-runtime";
var StyledBreadcrumb = styled("nav", {
  display: "flex",
  alignItems: "center",
  ol: {
    display: "flex",
    margin: 0,
    padding: 0
  }
});
var StyledBreadcrumbItem = styled("li", {
  display: "flex",
  alignItems: "center",
  a: {
    fontWeight: "$regular",
    fontFamily: "$default",
    fontSize: "$sm",
    lineHeight: "$short",
    textDecoration: "none",
    color: "$gray-300",
    cursor: "pointer",
    padding: "$2",
    borderRadius: "$rounded-xs",
    transition: "background-color 0.2s"
  },
  "a:hover": {
    backgroundColor: "$gray-100"
  },
  "span svg": {
    display: "flex",
    color: "$gray-300",
    margin: "0 $1"
  },
  "&:last-child svg": {
    display: "none"
  },
  variants: {
    isActivePage: {
      true: {
        a: {
          color: "$gray-800",
          fontWeight: "$medium"
        }
      }
    }
  }
});
function BreadcrumbItem({
  children,
  isActivePage,
  to
}) {
  return /* @__PURE__ */ jsxs5(StyledBreadcrumbItem, { isActivePage, children: [
    /* @__PURE__ */ jsx11("a", { href: to, children }),
    /* @__PURE__ */ jsx11("span", { children: /* @__PURE__ */ jsx11(CaretRight, { size: 16 }) })
  ] });
}
function Breadcrumb(props) {
  return /* @__PURE__ */ jsx11(StyledBreadcrumb, __spreadProps(__spreadValues({}, props), { children: /* @__PURE__ */ jsx11("ol", { children: props.children }) }));
}

// src/components/navigation/multistep.tsx
import { jsx as jsx12, jsxs as jsxs6 } from "react/jsx-runtime";
var MultistepContainer = styled("div", {});
var MultistepLabel = styled("label", {
  color: "$gray-300",
  fontSize: "$xs",
  fontFamily: "$default",
  display: "block",
  span: {
    display: "block",
    margin: "$1 0",
    fontSize: "$md",
    color: "$gray-500"
  }
});
var Steps = styled("div", {
  display: "grid",
  gap: "$2",
  marginTop: "$1",
  gridTemplateColumns: "repeat(var(--steps-size), 1fr)"
});
var Step = styled("div", {
  height: "4px",
  borderRadius: "$rounded-xs",
  backgroundColor: "$gray-100",
  variants: {
    active: {
      true: {
        backgroundColor: "$primary-300"
      }
    }
  }
});
function Multistep(_a) {
  var _b = _a, {
    size,
    label,
    currentStep = 1
  } = _b, rest = __objRest(_b, [
    "size",
    "label",
    "currentStep"
  ]);
  return /* @__PURE__ */ jsxs6(MultistepContainer, __spreadProps(__spreadValues({}, rest), { children: [
    /* @__PURE__ */ jsxs6(MultistepLabel, { children: [
      "Passo ",
      currentStep,
      " de ",
      size,
      /* @__PURE__ */ jsx12("span", { children: label })
    ] }),
    /* @__PURE__ */ jsx12(Steps, { css: { "--steps-size": size }, children: Array.from({ length: size }, (_, i) => i + 1).map((step) => {
      return /* @__PURE__ */ jsx12(Step, { active: currentStep >= step }, step);
    }) })
  ] }));
}

// src/components/typography/heading.tsx
var Heading = styled("h2", {
  fontFamily: "$default",
  lineHeight: "$shorter",
  margin: 0,
  color: "$gray-800",
  variants: {
    size: {
      xs: { fontSize: "$xs" },
      sm: { fontSize: "$sm" },
      md: { fontSize: "$md" },
      lg: { fontSize: "$lg" },
      xl: { fontSize: "$xl" },
      "2xl": { fontSize: "$2xl" },
      "3xl": { fontSize: "$3xl" },
      "4xl": { fontSize: "$4xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
Heading.displayName = "Heading";

// src/components/typography/text.tsx
var Text = styled("p", {
  fontFamily: "$default",
  lineHeight: "$shorter",
  margin: 0,
  color: "$gray-700",
  variants: {
    size: {
      xs: { fontSize: "$xs" },
      sm: { fontSize: "$sm" },
      md: { fontSize: "$md" },
      lg: { fontSize: "$lg" },
      xl: { fontSize: "$xl" },
      "2xl": { fontSize: "$2xl" },
      "3xl": { fontSize: "$3xl" },
      "4xl": { fontSize: "$4xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
Text.displayName = "Text";

// src/components/overlay/dropdown/index.tsx
import * as DropdownMenu5 from "@radix-ui/react-dropdown-menu";

// src/components/overlay/dropdown/content.tsx
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { jsx as jsx13 } from "react/jsx-runtime";
var StyledContent = styled(DropdownMenu.Content, {
  minWidth: "220px",
  backgroundColor: "white",
  borderRadius: "6px",
  padding: "5px",
  boxShadow: "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity"
});
function DropdownContent(props) {
  return /* @__PURE__ */ jsx13(DropdownMenu.Portal, { children: /* @__PURE__ */ jsx13(StyledContent, __spreadProps(__spreadValues({ sideOffset: 5 }, props), { children: props.children })) });
}

// src/components/overlay/dropdown/divider.tsx
import * as DropdownMenu2 from "@radix-ui/react-dropdown-menu";
import { jsx as jsx14 } from "react/jsx-runtime";
var StyledDivider = styled(DropdownMenu2.Separator, {
  height: 1,
  backgroundColor: "$gray-100",
  margin: "$1 $2"
});
function DropdownDivider(props) {
  return /* @__PURE__ */ jsx14(StyledDivider, __spreadValues({}, props));
}

// src/components/overlay/dropdown/item.tsx
import * as DropdownMenu3 from "@radix-ui/react-dropdown-menu";
import { jsx as jsx15 } from "react/jsx-runtime";
var StyledItem = styled(DropdownMenu3.Item, {
  fontSize: "$sm",
  lineHeight: "$short",
  color: "$gray-800",
  borderRadius: "$rounded-xs",
  display: "flex",
  alignItems: "center",
  height: "1.5rem",
  padding: "$1 $2",
  paddingLeft: "$6",
  position: "relative",
  userSelect: "none",
  outline: "none",
  fontFamily: "$default",
  cursor: "pointer",
  transition: "background-color 0.2s",
  "&:hover": {
    backgroundColor: "$gray-100"
  }
});
function DropdownItem(props) {
  return /* @__PURE__ */ jsx15(StyledItem, __spreadProps(__spreadValues({}, props), { children: props.children }));
}

// src/components/overlay/dropdown/trigger.tsx
import * as DropdownMenu4 from "@radix-ui/react-dropdown-menu";
import { jsx as jsx16 } from "react/jsx-runtime";
var StyledTrigger = styled(DropdownMenu4.Trigger, {});
function DropdownTrigger(props) {
  return /* @__PURE__ */ jsx16(StyledTrigger, __spreadProps(__spreadValues({}, props), { children: props.children }));
}

// src/components/overlay/dropdown/index.tsx
import { jsx as jsx17 } from "react/jsx-runtime";
var StyledDropdown = styled(DropdownMenu5.Root, {});
function Dropdown(props) {
  return /* @__PURE__ */ jsx17(StyledDropdown, { children: props.children });
}

// src/components/overlay/tooltip/index.tsx
import * as RadixTooltip3 from "@radix-ui/react-tooltip";

// src/components/overlay/tooltip/content.tsx
import * as RadixTooltip from "@radix-ui/react-tooltip";
import { jsx as jsx18, jsxs as jsxs7 } from "react/jsx-runtime";
var StyledContent2 = styled(RadixTooltip.Content, {
  padding: "10px 15px",
  fontSize: "15px",
  lineHeight: 1,
  color: "black",
  backgroundColor: "white",
  boxShadow: "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  userSelect: "none",
  animationDuration: "100ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",
  fontFamily: "$default"
});
var StyledArrow = styled(RadixTooltip.Arrow, {
  fill: "white"
});
function TooltipContent(props) {
  return /* @__PURE__ */ jsx18(RadixTooltip.Portal, { children: /* @__PURE__ */ jsxs7(StyledContent2, __spreadProps(__spreadValues({ sideOffset: 5 }, props), { children: [
    props.children,
    /* @__PURE__ */ jsx18(StyledArrow, {})
  ] })) });
}

// src/components/overlay/tooltip/trigger.tsx
import * as RadixTooltip2 from "@radix-ui/react-tooltip";
import { jsx as jsx19 } from "react/jsx-runtime";
var StyledTtigger = styled(RadixTooltip2.Trigger, {});
function TooltipTrigger(props) {
  return /* @__PURE__ */ jsx19(RadixTooltip2.Trigger, { asChild: true, children: props.children });
}

// src/components/overlay/tooltip/index.tsx
import { jsx as jsx20 } from "react/jsx-runtime";
var StyledTooltip = styled(RadixTooltip3.Root, {});
function Tooltip(props) {
  return /* @__PURE__ */ jsx20(RadixTooltip3.Provider, { children: /* @__PURE__ */ jsx20(StyledTooltip, { children: props.children }) });
}

// src/components/overlay/modal/index.tsx
import * as Dialog5 from "@radix-ui/react-dialog";

// src/components/overlay/modal/content.tsx
import { X } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import { jsx as jsx21, jsxs as jsxs8 } from "react/jsx-runtime";
var StyledOverlay = styled(Dialog.Overlay, {
  backgroundColor: "rgba(0, 0, 0, 0.65)",
  position: "fixed",
  inset: 0,
  animation: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)"
});
var StyledContent3 = styled(Dialog.Content, {
  backgroundColor: "white",
  borderRadius: "6px",
  boxShadow: "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "450px",
  maxHeight: "85vh",
  padding: "25px",
  animation: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
  boxSizing: "border-box",
  fontFamily: "$default",
  "&:focus": {
    outline: "none"
  }
});
var StyledCloseButton = styled(Dialog.Close, {
  padding: "0.5rem",
  border: "1px solid black",
  background: "$gray-50",
  position: "absolute",
  top: "-15%",
  right: "-3%",
  cursor: "pointer",
  transition: "background-color 0.2s"
});
function ModalContent(props) {
  return /* @__PURE__ */ jsxs8(Dialog.Portal, { children: [
    /* @__PURE__ */ jsx21(StyledOverlay, {}),
    /* @__PURE__ */ jsxs8(StyledContent3, __spreadProps(__spreadValues({}, props), { children: [
      props.children,
      /* @__PURE__ */ jsx21(StyledCloseButton, { asChild: true, children: /* @__PURE__ */ jsx21("button", { className: "IconButton", "aria-label": "Close", children: /* @__PURE__ */ jsx21(X, { size: 24, color: "#000" }) }) })
    ] }))
  ] });
}

// src/components/overlay/modal/description.tsx
import * as Dialog2 from "@radix-ui/react-dialog";
import { jsx as jsx22 } from "react/jsx-runtime";
var StyledDescription = styled(Dialog2.Description, {
  margin: "10px 0 20px",
  color: "gray",
  fontSize: 16,
  lineHeight: 1.5
});
function ModalDescription(props) {
  return /* @__PURE__ */ jsx22(StyledDescription, __spreadProps(__spreadValues({}, props), { children: props.children }));
}

// src/components/overlay/modal/title.tsx
import * as Dialog3 from "@radix-ui/react-dialog";
import { jsx as jsx23 } from "react/jsx-runtime";
var StyledTitle = styled(Dialog3.Title, {
  margin: 0,
  fontWeight: 500,
  color: "black",
  fontSize: 17
});
function ModalTitle(props) {
  return /* @__PURE__ */ jsx23(StyledTitle, __spreadProps(__spreadValues({}, props), { children: props.children }));
}

// src/components/overlay/modal/trigger.tsx
import * as Dialog4 from "@radix-ui/react-dialog";
import { jsx as jsx24 } from "react/jsx-runtime";
var StyledTrigger2 = styled(Dialog4.Trigger, {});
function ModalTrigger(props) {
  return /* @__PURE__ */ jsx24(StyledTrigger2, { asChild: true, children: props.children });
}

// src/components/overlay/modal/index.tsx
import { jsx as jsx25 } from "react/jsx-runtime";
var StyledModal = styled(Dialog5.Root, {});
function Modal(props) {
  return /* @__PURE__ */ jsx25(Dialog5.Root, __spreadProps(__spreadValues({}, props), { children: props.children }));
}
export {
  Alert,
  AlertTitle,
  Avatar,
  AvatarContainer,
  AvatarFallback,
  Badge,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Checkbox,
  CheckboxContainer,
  CheckboxIndicator,
  Chip,
  Dropdown,
  DropdownContent,
  DropdownDivider,
  DropdownItem,
  DropdownTrigger,
  Heading,
  IconButton,
  IconButtonContainer,
  Input,
  InputContainer,
  InputContent,
  Modal,
  ModalContent,
  ModalDescription,
  ModalTitle,
  ModalTrigger,
  Multistep,
  RadioButton,
  RadioButtonContainer,
  RadioButtonIndicator,
  RadioButtonItem,
  Skeleton,
  StyledBreadcrumb,
  StyledBreadcrumbItem,
  Table,
  Text,
  TextField,
  Tooltip,
  TooltipContent,
  TooltipTrigger
};
