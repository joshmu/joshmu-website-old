import React from "react"
import GlobalStyle from "./src/styles/globalStyle"
import { GlobalProvider } from "./src/context/globalContext"

export const wrapRootElement = ({ element }) => {
  return (
    <GlobalProvider>
      <GlobalStyle theme="default" />
      {element}
    </GlobalProvider>
  )
}
