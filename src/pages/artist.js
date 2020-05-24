import React from "react"

import { Wrapper } from "../components/pageElements"
import {
  Nav,
  Banner,
  About,
  Clients,
  Planner,
  Twitter,
  Instagram,
  Reviews,
  Contact,
} from "../components/artistPage"

const ArtistPage = () => {
  return (
    <Wrapper>
      <Nav />
      <Banner />
      <About />
      <Clients />
      <Planner />
      <Twitter />
      <Instagram />
      <Reviews />
      <Contact />
    </Wrapper>
  )
}

export default ArtistPage
