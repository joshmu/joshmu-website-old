import React from "react"

import styled from "styled-components"

// import Reveal from "../components/reveal"
import BlockSlide from "../components/blockslide"

const IndexPage = () => (
  <App>
    {/* <Reveal> Hello </Reveal> */}
    <BlockSlide bg="papayawhip">
      {" "}
      <h4 style={{ margin: 0, padding: "1em" }}>joshmu.com</h4>
    </BlockSlide>
  </App>
)

const App = styled.div`
  background: papayawhip;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default IndexPage
