/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import "typeface-montserrat"
import "typeface-reenie-beanie"
import "typeface-fira-code"

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
