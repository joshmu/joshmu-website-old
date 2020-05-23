import React, { useEffect } from "react"

import styled from "styled-components"
import gsap from "gsap"

import { getCssVar } from "../pageElements/"

const BlockSlider = ({ children, bgColor, blockColor, ...delegated }) => {
  useEffect(() => {
    // always instantiate third party plugins in component mount since we are building site on the server
    gsapAnimation()
  }, [])

  return (
    <Wrapper
      data-gsap="init"
      bgColor={bgColor}
      blockColor={blockColor}
      {...delegated}
    >
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
  position: relative;
  overflow: hidden;
  .overlay {
    pointer-events: none;
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
      width: 1em;
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

const gsapAnimation = () => {
  const tl = gsap.timeline()

  // remove flash initially
  // tl.to("body", {
  //   duration: 0,
  //   css: { visibility: "visible" },
  // })
  tl.to('[data-gsap="1"]', {
    left: "100%",
    duration: 1.6,
    ease: "Power3.easeOut",
    delay: 1,
  })
    // CUSTOM -> REMOVE THIS FOR STANDALONE COMPONENT
    .from('[data-gsap="3"] span', {
      opacity: 0.25,
      duration: 1.2,
      stagger: 0.1,
      delay: -1.6,
    })
    .to('[data-gsap="2"]', {
      left: 0,
      duration: 2,
      ease: "Power3.easeOut",
      delay: -1,
    })
    .to('[data-gsap="2"]', {
      scale: 0.1,
      duration: 0.8,
      ease: "Power3.easeOut",
      delay: -0.6,
    })
    .to('[data-gsap="2"]', {
      scale: 0,
      rotate: "360deg",
      duration: 0.8,
      ease: "Power3.easeOut",
      delay: -0.6,
    })
    // target 'body' due to landscape mode on iphone containing body background-color as --main-bg-color
    .to([".inner-wrapper", "body"], {
      css: {
        "--landing-bg-color": getCssVar("--main-font-color"),
        backgroundColor: getCssVar("--main-font-color"),
      },
      duration: 0.8,
      ease: "Power3.easeInOut",
      delay: -0.6,
    })
    .to(".inner-wrapper", {
      css: {
        "--landing-font-color": getCssVar("--main-bg-color"),
      },
      duration: 0.4,
      ease: "Power3.easeOut",
      delay: -0.4,
    })
    .from(".split", {
      rotate: 720,
      scale: 0,
      duration: 1,
      ease: "Power3.easeInOut",
      delay: -0.6,
    })
  // .to("body", {
  //   backgroundColor: getCssVar("--secondary-bg-color"),
  //   color: getCssVar("--secondary-font-color"),
  //   duration: 0.6,
  //   ease: "Power3.easeOut",
  //   delay: -0.6,
  // })
}

export default BlockSlider