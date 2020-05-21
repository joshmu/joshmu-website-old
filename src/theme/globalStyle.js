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
  --main-bg-color: white;
  --secondary-bg-color: black;

  --main-font-color: black;
  --secondary-font-color: white;

  --main-font-family: Montserrat, Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  --artist-font-family: 'Reenie Beanie', Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  --coder-font-family: 'Fira Code', Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  --artist-font-color: #F1B05A;
  --coder-font-color: #7CC46E;
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
