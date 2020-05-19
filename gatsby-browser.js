/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import "typeface-montserrat"

import React from "react"
import GlobalStyle from "./src/styles/global"

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyle theme="default" />
      {element}
    </>
  )
}
