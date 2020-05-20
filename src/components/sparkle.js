import React from "react"

import styled from "styled-components"

const Sparkle = ({ children, ...delegated }) => {
  return (
    <Wrapper style={{ ...(delegated.style || {}) }} {...delegated}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* background: salmon; */
`

export default Sparkle
