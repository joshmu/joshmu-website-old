import React from "react"

import { Wrapper, Row, ColWithBg, Content } from "../pageElements"

export const Planner = () => {
  return (
    <Wrapper>
      <Row height={20}>
        <ColWithBg>
          <Content center>PLANNER</Content>
        </ColWithBg>
        <ColWithBg>
          <Content center>VIDEO</Content>
        </ColWithBg>
      </Row>
    </Wrapper>
  )
}
