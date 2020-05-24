import React from "react"
import styled from "styled-components"

import { rgba } from "./helpers"

export const Col = styled.div`
  flex: ${({ size }) => (size ? size : 1)};
  flex-wrap: wrap;
  background-color: ${({ bg, bgPlaceholder }) => (bg ? bg : bgPlaceholder)};
  box-sizing: border-box;

  /* MODIFIERS */
  ${({ theme }) => theme.modifiers}
`

// modified version for better visualisation of layout
export const ColWithBg = props => {
  const pastelAlpha = { min: 20, max: 40 }
  return <Col {...props} bgPlaceholder={rgba(pastelAlpha)}></Col>
}
