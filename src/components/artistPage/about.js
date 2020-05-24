import React from "react"

import { Wrapper, Row, ColWithBg, Content, H1, P } from "../pageElements"

export const About = () => {
  return (
    <Wrapper>
      <Row>
        <ColWithBg>
          <Content center x="flex-end" spacing="p2">
            HEADSHOT
          </Content>
        </ColWithBg>
        <ColWithBg>
          <Content center x="flex-start" spacing="p8">
            <div>
              <H1 style={{ margin: 0 }}>About Me</H1>
              <P>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                debitis officia hic reprehenderit dolore error accusamus eum,
                porro repellendus magnam dignissimos nobis quaerat voluptatum
                quam similique quisquam ut quasi explicabo.
              </P>
            </div>
          </Content>
        </ColWithBg>
      </Row>
    </Wrapper>
  )
}
