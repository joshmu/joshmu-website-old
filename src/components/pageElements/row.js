import React from "react"
import styled from "styled-components"

import { rgba } from "./helpers"

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  background-color: ${({ bg, bgPlaceholder }) => (bg ? bg : bgPlaceholder)};

  /* MODIFIERS */
  ${({ theme }) => theme.modifiers}
`

// modified version for better visualisation of layout
export const RowWithBg = props => {
  const pastelAlpha = { min: 20, max: 40 }
  return <Row {...props} bgPlaceholder={rgba(pastelAlpha)}></Row>
}
