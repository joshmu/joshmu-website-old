import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
  --main-bg-color: whitesmoke;
  --secondary-bg-color: black;
  --main-font-color: whitesmoke;
  --secondary-font-color: black;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Montserrat, Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--main-font-color);
  }
`

export default GlobalStyle
