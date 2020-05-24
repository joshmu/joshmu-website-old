// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"

import SEO from "../components/gatsby/seo"

import {
  Wrapper,
  Row,
  ColWithBg,
  Content,
  H1,
  P,
} from "../components/pageElements"

const DeveloperPage = props => (
  <Wrapper>
    <SEO title="Josh Mu Developer Portfolio" />
    <Row>
      <ColWithBg>
        <Content center>
          <H1 spacing="mb8">Developer Portfolio</H1>
        </Content>
      </ColWithBg>
    </Row>
    <Row>
      <ColWithBg></ColWithBg>
      <ColWithBg>
        <Content>
          <P>Welcome to Josh Mu's Developer Portfolio page. ({props.path})</P>
          <br />
          <Link to="/">Go back to the hello page.</Link>
        </Content>
      </ColWithBg>
      <ColWithBg></ColWithBg>
    </Row>
  </Wrapper>
)

export default DeveloperPage
