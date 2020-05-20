import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
  --main-bg-color: whitesmoke;
  --main-font-color: black;

  --secondary-bg-color: black;
  --secondary-font-color: whitesmoke;

  --main-font-family: Montserrat, Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  --artist-font-family: 'Reenie Beanie', Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  --coder-font-family: 'Fira Code', Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  --artist-font-color: #F1B05A;
  /* --coder-font-color: #6196B8; */
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

    /* remove animation flash */
    visibility: hidden;
  }
`

export default GlobalStyle
