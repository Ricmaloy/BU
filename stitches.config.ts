import { createStitches, defaultThemeMap } from "@stitches/react";
import type * as Stitches from "@stitches/react";

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
    width: "space",
    height: "space",
    opacity: "opacity",
  },

  theme: {
    colors: {
      "bu-primary": "#FF5100",
      "bu-secondary": "#E2E2E2",

      "background-light": "#313131",
      "background-base": "#282828",
      "background-dark": "#202024",

      "success-light": "#04D361",
      "success-base": "#1B873F",
      "success-low": "#051B0D",

      "danger-light": "#F75A68",
      "danger-base": "#CC2937",
      "danger-low": "#2D090C",

      "warning-light": "#FBA94C",
      "warning-base": "#EB8A1D",
      "warning-low": "#2E1B06",

      "new-light": "#1EF7D0",
      "new-base": "#07847E",
      "new-low": "#163840",

      white: "#FFFFFF",
      black: "#000000",

      "grey-100": "#E2E2E2",
      "grey-200": "#C6C6C6",
      "grey-300": "#8D8D99",
      "grey-400": "#7C7C8A",
      "grey-500": "#505059",
      "grey-600": "#323238",
      "grey-700": "#29292E",
      "grey-800": "#202024",
      "grey-900": "#121214",
      "grey-950": "#09090A",
    },

    space: {
      px: "1px",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      10: "2.5rem",
      12: "3rem",
      16: "4rem",
      20: "5rem",
      40: "10rem",
      64: "16rem",
      80: "20rem",
    },

    fontSizes: {
      xxs: "0.625rem",
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "4xl": "2rem",
      "5xl": "2.25rem",
      "6xl": "3rem",
      "7xl": "4rem",
      "8xl": "4.5rem",
      "9xl": "6rem",
    },

    fonts: {
      default: "Epilogue, sans-serif",
    },

    fontWeights: {
      regular: "400",
      medium: "500",
      bold: "700",
    },

    lineHeights: {
      shorter: "125%",
      short: "140%",
      base: "160%",
      tall: "180%",
    },

    borderWidths: {
      thin: "1px",
      medium: "1.5px",
      thick: "2px",
      heavy: "4px",
    },

    radii: {
      xs: "2.5px",
      sm: "5px",
      md: "10px",
      lg: "20px",
      full: "99999px",
    },

    opacity: {
      default: "100%",
      semiOpaque: "90%",
      intense: "75%",
      medium: "50%",
      light: "25%",
      semiTransparent: "10%",
    },

    zIndices: {
      overlay: 9995,
      modal: 9999,
    },
  },

  media: {
    mobile: "(max-width: 768px)",
  },

  utils: {
    mx: (value: Stitches.ScaleValue<"space">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.ScaleValue<"space">) => ({
      marginTop: value,
      marginBottom: value,
    }),
    px: (value: Stitches.ScaleValue<"space">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.ScaleValue<"space">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});
