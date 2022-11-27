import {
  colors,
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  borderRadius,
  borderWidths,
  spacing,
  zIndices,
} from '@manawil-ui/tokens'

import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    width: 'spacing',
    height: 'spacing',
  },

  theme: {
    colors,
    fontSizes,
    fontWeights,
    lineHeights,
    borderWidths,
    fonts: fontFamilies,
    radii: borderRadius,
    space: spacing,
    zIndices,
  },

  media: {
    web: '(max-width: 1280px)',
    medium: '(max-width: 992px)',
    mobile: '(max-width: 768px)',
  },
})
