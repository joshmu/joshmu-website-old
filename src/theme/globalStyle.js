import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

export const theme = {
  bg: {
    main: "white",
    secondary: "black",
  },
  font: {
    family: {
      main:
        "Montserrat, Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      artist:
        "'Reenie Beanie', Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      coder:
        "'Fira Code', Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;",
    },
    color: {
      main: "black",
      secondary: "white",
      artist: "#F1B05A",
      coder: "#7CC46E",
    },
  },
}

export const GlobalStyle = createGlobalStyle`
  ${reset}

  /* CSS VARIABLES BUT WE CAN USE STYLE COMPONENTS THEME INSTEAD */
  :root {
  --main-bg-color: ${props => props.theme.bg.main};
  --secondary-bg-color: ${props => props.theme.bg.secondary};

  --main-font-color: ${props => props.theme.font.color.main};
  --secondary-font-color: ${props => props.theme.font.color.secondary};

  --main-font-family: ${props => props.theme.font.family.main};
  --artist-font-family: ${props => props.theme.font.family.artist};
  --coder-font-family: ${props => props.theme.font.family.coder};

  --artist-font-color: ${props => props.theme.font.color.artist};
  --coder-font-color: ${props => props.theme.font.color.coder};
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-size: 16px;
    color: var(--main-font-color);
    font-family: var(--main-font-family);

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    background-color: var(--main-bg-color);
  }


`

export default GlobalStyle
