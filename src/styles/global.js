import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
  --main-bg-color: whitesmoke;
  --secondary-bg-color: black;
  --main-font-color: whitesmoke;
  --secondary-font-color: black;

  --main-font-family: Montserrat, Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  --artist-font-family: 'Reenie Beanie', Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  --coder-font-family: 'Fira Code', Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--main-font-family);
    color: var(--main-font-color);
  }
  html, body {

  }
`

export default GlobalStyle
