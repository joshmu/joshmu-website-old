import React from "react"

import styled from "styled-components"

// import Reveal from "../components/reveal"
import BlockSlide from "../components/blockslide"

const IndexPage = () => (
  <>
    <App>
      {/* <Reveal> Hello </Reveal> */}
      <BlockSlide>
        <h1>joshmu.com</h1>
      </BlockSlide>
    </App>
  </>
)

const App = styled.div`
  background: var(--main-bg-color);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-weight: 300;
  }
`

export default IndexPage
