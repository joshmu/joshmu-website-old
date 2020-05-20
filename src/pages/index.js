import React from "react"

import styled from "styled-components"

// import LandingPage from "../components/landingPage"
import Sparkle from "../components/sparkle"

const IndexPage = () => (
  <Main>
    {/* <LandingPage /> */}
    <Sparkle>
      <h1>JOSH MU</h1>
    </Sparkle>
  </Main>
)

const Main = styled.main`
  background: var(--main-bg-color);
  color: var(--main-font-color);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default IndexPage
