import { extendTheme, textDecoration, typography } from "@chakra-ui/react";

export const colourSystem = {
  Accent: {
    accent_1: "#F64851",
    accent_2: "#432682",
  },
  Text: {
    light: "#F8F8FA",
    secondary: "#6A708E",
    dark: "#373546",
  },
  Background: {
    foreground: "#FCFEFF",
  },
  Grays: {
    light: "#EEF1F4",
  },
};

export const typographySystem = {
  size_1: "0.625rem",
  size_2: "0.75rem",
  size_3: "0.875rem",
  size_4: "1rem",
  size_5: "1.125rem",
  size_6: "1.25rem",
  size_7: "1.5rem",
  size_8: "1.875rem",
  size_9: "2.25rem",
  size_10: "2.75rem",
  size_11: "3.25rem",
  size_12: "3.875rem",
  size_13: "4.625rem",
  size_14: "5.375rem",
  size_15: "6.125rem",
};

export const fontWeightSystem = {
  Default: 400,
  Medium: 500,
  SemiBold: 600,
  Bold: 700,
};

/*
--- 01 TYPOGRAPHY SYSTEM

- Font sizes (px)
10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

- Font weights
Default: 400
Medium: 500
Semi-bold: 600
Bold: 700

- Line heights
Default: 1
Small: 1.05
Medium: 1.2
Paragraph default: 1.6
Large: 1.8

- Letter spacing
-0.5px
0.75px

--- 02 COLORS

- Primary: #e67e22
- Tints:
#fdf2e9
#fae5d3
#eb984e

- Shades: 
#cf711f
#45260a

- Accents:
- Greys

#888
#767676 (lightest grey allowed on #fff)
#6f6f6f (lightest grey allowed on #fdf2e9)
#555
#333

--- 05 SHADOWS

0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);

--- 06 BORDER-RADIUS

Default: 9px
Medium: 11px

--- 07 WHITESPACE

- Spacing system (px)
2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128
*/

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bgGradient: "linear(to-t, #4B379D, #262C83, #20253D)",
        minHeight: "100vh",
        color: colourSystem.Text.light,
        fontFamily: "Rubik, sans-serif",
        lineHeight: 1,
        fontWeight: fontWeightSystem.Default,
      },
      ".stroke": {
        stroke: "green",
        strokeDasharray: "5 10%",
        strokeWidth: "10%",
        fill: "none",
      },
      ".link": {
        height: "s",
        _hover: {
          bg: "rgba(148, 171, 202, 0.2)",
          cursor: "pointer",
        },
      },
      ".link-active": {
        fontWeight: fontWeightSystem.SemiBold,
        bg: "rgba(148, 171, 202, 0.2)",
        cursor: "pointer",
      },
      ".btn-primary": {
        bg: colourSystem.Accent.accent_1 + "!important",
        color: "white!important",
        _hover: {
          color: colourSystem.Accent.accent_1 + "!important",
          bg: colourSystem.Grays.light + "!important",
        },
      },
      ".btn-secondary": {
        bg: colourSystem.Accent.accent_2 + "!important",
        color: "white!important",
        _hover: {
          color: colourSystem.Accent.accent_2 + "!important",
          bg: colourSystem.Grays.light + "!important",
        },
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontSize: "inherit",
      },
    },
    Text: {
      baseStyle: {
        fontSize: "inherit",
      },
    },
    Link: {
      baseStyle: {
        fontSize: "inherit",
        textDecoration: "none",
        _hover: { textDecoration: "none" },
      },
    },
    Container: {
      baseStyle: {
        width: "100%",
        maxWidth: "100%",
        height: "100%",
        borderRadius: 10,
      },

      variants: {
        "with-shadow": {
          boxShadow:
            "rgba(252, 254, 255, 0.5) 0px 13px 27px -5px, rgba(19, 62, 83, 0.4) 0px 8px 16px -8px",
        },
        "link-container": {
          height: "s",
          borderRadius: 10,
        },
        "link-container-active": {
          bg: "red",
          height: "s",
          borderRadius: 10,
        },
      },
    },
  },
});

export default theme;
