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

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-family: var(--main-font-family); */
    /* color: var(--main-font-color); */
  }
  html, body {
    /* remove animation flash */
    /* visibility: hidden; */

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default GlobalStyle
