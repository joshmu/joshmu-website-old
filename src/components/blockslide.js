import React, { useEffect } from "react"

import styled from "styled-components"
import gsap from "gsap"

const BlockSlide = ({ children, bgColor, blockColor }) => {
  const tl = gsap.timeline()
  useEffect(() => {
    animate(tl)
  }, [tl])

  return (
    <Wrapper data-gsap="init" bgColor={bgColor} blockColor={blockColor}>
      <div className="overlay first" data-gsap="1"></div>
      <div className="overlay second" data-gsap="2"></div>
      <div className="content" data-gsap="3">
        {children}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  --bg-color: ${props => props.bgColor || "var(--main-bg-color)"};
  --blockColor: ${props => props.blockColor || "black"};

  padding: 1em 2em; /* so our block cursor is not overlapping content*/
  visibility: hidden;
  position: relative;
  overflow: hidden;
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    z-index: 1;
    &.first {
      width: 100%;
      background-color: var(--bg-color);
      z-index: 3;
    }
    &.second {
      width: 1.25em;
      background-color: var(--blockColor);
      left: 150%;
      z-index: 1;
    }
  }
  .content {
    position: relative;
    z-index: 2;
    color: var(--bg-color);
    mix-blend-mode: difference;
  }
`

const animate = tl => {
  // remove flash initially
  tl.to('[data-gsap="init"]', {
    duration: 0,
    css: { visibility: "visible" },
  })
    .to('[data-gsap="1"]', {
      left: "100%",
      duration: 1.6,
      ease: "Power3.easeOut",
      delay: 0.6,
    })
    .to('[data-gsap="2"]', {
      left: 0,
      duration: 2,
      ease: "Power3.easeOut",
      delay: -1,
    })
    .to('[data-gsap="2"]', {
      scale: 0.1,
      duration: 1,
      ease: "Power3.easeOut",
      delay: -0.6,
    })
    .to('[data-gsap="2"]', {
      scale: 0,
      rotate: "360deg",
      duration: 1,
      ease: "Power3.easeOut",
      delay: -0.6,
    })
    .to("body", {
      css: {
        "--main-bg-color": "black",
        "--main-font-color": "whitesmoke",
      },
      duration: 0.6,
      ease: "Power3.easeOut",
      delay: -0.6,
    })
}

export default BlockSlide
