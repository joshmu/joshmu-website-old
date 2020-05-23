import { createGlobalStyle, css } from "styled-components"
import reset from "styled-reset"

// Inspiration from
// https://dev.to/spences10/globally-style-the-gatsby-default-starter-with-styled-components-v5-411f
// Tailwind full config
// https://github.com/tailwindcss/designing-with-tailwindcss/blob/master/01-getting-up-and-running/07-customizing-your-design-system/tailwind-full.config.js
export const theme = {
  backgroundColor: {
    main: "white",
    secondary: "black",
  },
  fontFamily: {
    main:
      "Montserrat, Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    artist:
      "'Reenie Beanie', Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    coder:
      "'Fira Code', Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;",
  },
  fontColor: {
    main: "black",
    secondary: "white",
    artist: "#F1B05A",
    coder: "#7CC46E",
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem",
  },
  fontWeight: {
    hairline: "100",
    thin: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
  },
  spacing: {
    px: "1px",
    "0": "0",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "16": "4rem",
    "20": "5rem",
    "24": "6rem",
    "32": "8rem",
    "40": "10rem",
    "48": "12rem",
    "56": "14rem",
    "64": "16rem",
  },
  height: function (val) {
    const heightDict = {
      auto: "auto",
      ...this.spacing,
      full: "100%",
      screen: "100vh",
    }
    return `height: ${heightDict[val]};`
  },
  width: function (val) {
    const widthDict = {
      auto: "auto",
      ...this.spacing,
      full: "100%",
      fitContent: "fit-content",
      screen: "100vw", // only diff from height func
    }
    return `width: ${widthDict[val]};`
  },
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  lineHeight: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
  },
  maxWidth: {
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    full: "100%",
  },
  minHeight: {
    "0": "0",
    full: "100%",
    screen: "100vh",
  },
  minWidth: {
    "0": "0",
    full: "100%",
  },
  opacity: {
    "0": "0",
    "25": "0.25",
    "50": "0.5",
    "75": "0.75",
    "100": "1",
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },

  ///////////////////////////
  // HELPERS
  ///////////////////////////
  media: function (size, styles) {
    return `
    @media only screen and (max-width: ${this.screens[size]}) {
      ${styles}
    }
  `
  },
  mediaNoHover: function (styles) {
    return `
      /* smartphones, touchscreens */
      @media (hover: none) {
        ${styles}
      }
    `
  },
  dict: {
    p: "padding",
    pl: "padding-left",
    pt: "padding-top",
    pr: "padding-right",
    pb: "padding-bottom",
    m: "margin",
    ml: "margin-left",
    mt: "margin-top",
    mr: "margin-right",
    mb: "margin-bottom",
  },
  converter: function (cmd) {
    return cmd
      .split(" ")
      .map(txt => {
        const [, cmd, val] = txt.match(/(\w+)(\d)/i)
        return `${this.dict[cmd]}: ${this.spacing[val]};`
      })
      .join("")
  },
  modifiers: css`
    ${props => `
      /* height */
      ${props.height ? props.theme.height(props.height) : ""}
      /* width */
      ${props.width ? props.theme.height(props.width) : ""}
      /* spacing */
      ${props.spacing ? props.theme.converter(props.spacing) : ""}
      /* media queries */
      ${
        props.collapse
          ? props.theme.media(props.collapse, `display: none;`)
          : ""
      }
    `}
  `,
}

export const GlobalStyle = createGlobalStyle`
  ${reset}

  /* CSS VARIABLES BUT WE CAN USE STYLE COMPONENTS THEME INSTEAD */
  :root {
  --main-bg-color: ${({ theme }) => theme.backgroundColor.main};
  --secondary-bg-color: ${({ theme }) => theme.backgroundColor.secondary};

  --main-font-color: ${({ theme }) => theme.fontColor.main};
  --secondary-font-color: ${({ theme }) => theme.fontColor.secondary};

  --main-font-family: ${({ theme }) => theme.fontFamily.main};
  --artist-font-family: ${({ theme }) => theme.fontFamily.artist};
  --coder-font-family: ${({ theme }) => theme.fontFamily.coder};

  --artist-font-color: ${({ theme }) => theme.fontColor.artist};
  --coder-font-color: ${({ theme }) => theme.fontColor.coder};
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: ${({ theme }) => theme.fontFamily.main};
    font-size: ${({ theme }) => theme.fontSize.lg};
    color: ${({ theme }) => theme.fontColor.main};

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    line-height: ${({ theme }) => theme.lineHeight.relaxed};
    letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
    background-color: ${({ theme }) => theme.backgroundColor.main};
  }

`
