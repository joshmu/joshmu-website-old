/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

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
