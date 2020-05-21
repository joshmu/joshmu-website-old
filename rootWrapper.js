import React from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from "./src/theme/globalStyle"
import { GlobalProvider } from "./src/context/globalContext"

export const wrapRootElement = ({ element }) => {
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {element}
      </ThemeProvider>
    </GlobalProvider>
  )
}
