// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"

import SEO from "../components/gatsby/seo"

import styled from "styled-components"
import { H1, P, Row, Col, Content } from "../components/pageElements"

const SecondPage = props => (
  <Wrapper>
    <SEO title="Josh Mu Developer Portfolio" />
    <Row>
      <Col>
        <Content center>
          <H1 spacing="mb8">Developer Portfolio</H1>
        </Content>
      </Col>
    </Row>
    <Row>
      <Col></Col>
      <Col>
        <Content>
          <P>Welcome to Josh Mu's Developer Portfolio page. ({props.path})</P>
          <br />
          <Link to="/">Go back to the hello page.</Link>
        </Content>
      </Col>
      <Col></Col>
    </Row>
  </Wrapper>
)

const Wrapper = styled.div``

export default SecondPage
