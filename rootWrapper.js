import React from "react"
import { GlobalStyle, theme } from "./src/theme/globalStyle"
import { GlobalProvider } from "./src/context/globalContext"

export const wrapRootElement = ({ element }) => {
  return (
    <GlobalProvider>
      <GlobalStyle theme={theme} />
      {element}
    </GlobalProvider>
  )
}
