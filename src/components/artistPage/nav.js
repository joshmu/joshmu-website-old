import React from "react"

import { Wrapper, Row, ColWithBg, Content } from "../pageElements"

export const Nav = () => {
  return (
    <Wrapper>
      <Row height={12}>
        <ColWithBg>
          <Content center>LOGO</Content>
        </ColWithBg>
        <ColWithBg>
          <Content center>NAV</Content>
        </ColWithBg>
      </Row>
    </Wrapper>
  )
}
