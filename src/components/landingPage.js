import React, { useEffect } from "react"

import styled, { css } from "styled-components"
import BlockSlider from "./blockSlider"

import gsap from "gsap"

const LandingPage = () => {
  useEffect(() => {
    // remove flash
    // todo: call gsap once fonts have successfully loaded
    gsap.to("[data-gsap='visibility']", { autoAlpha: 1, delay: 1 })
  }, [])

  return (
    <Wrapper data-gsap="visibility">
      <div className="inner-wrapper">
        <BlockSlider>
          <div className="logo">
            <h1 className="logo-text">
              {"JOSH MU".split("").map((t, idx) => (
                <span key={idx}>{t}</span>
              ))}
            </h1>
          </div>
        </BlockSlider>
        <div className="instructions">
          <p>Who would you like to meet</p>
        </div>
        <h2 className="artistOrCoder">
          <span className="artist">
            <a
              href="https://joshmu.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Artist
            </a>
          </span>
          <div className="split"></div>
          <span className="coder">
            <a
              href="https://github.com/joshmu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Coder
            </a>
          </span>
        </h2>
      </div>
    </Wrapper>
  )
}

const mediaNoHover = styles => css`
  /* smartphones, touchscreens */
  @media (hover: none) {
    ${styles}
  }
`

const Wrapper = styled.div`
  --landing-bg-color: var(--main-bg-color);
  /* hide the font initially in the background-color */
  --landing-font-color: var(--main-bg-color);

  /* hide gsap animation flash */
  visibility: hidden;

  /* using inner-wrapper so we can set css variables again at later point */
  .inner-wrapper {
    background-color: var(--landing-bg-color);
    color: var(--landing-font-color);

    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* color all links */
    a {
      color: var(--landing-font-color);
      font-family: var(--main-font-family);
    }

    .logo {
      letter-spacing: 0.4rem;
      text-transform: uppercase;
      .logo-text {
        font-weight: 300;
        font-size: 4rem;
        text-align: center;
        @media (max-width: 475px) {
          font-size: 3rem;
        }
      }
    }
    .instructions {
      font-family: var(--main-font-family);
      opacity: 0.7;
      margin-bottom: 1rem;
      margin-right: 0.5rem;
      p {
        position: relative;
        &:after {
          content: "?";
          font-size: 2em;
          display: inline-block;
          position: absolute;
          top: -0.35em;
          right: -0.6em;
          transform: rotate(15deg);
        }
      }
    }
    .artistOrCoder {
      display: flex;
      justify-content: center;
      align-items: center;
      .artist {
        margin: 0 1em;
        position: relative;
        font-size: 2.5rem;
        a {
          font-family: var(--artist-font-family);
          text-transform: capitalize;
          text-decoration: none;
          transition: color 0.4s ease-in-out;
          &:after {
            content: ".";
            transition: opacity 0.4s ease-in-out;
            position: absolute;
            font-size: 1.25em;
            bottom: 0;
            right: -0.15em;
            opacity: 0;
            ${mediaNoHover(`opacity: 1;`)}
          }
        }
        &:hover {
          a {
            color: var(--artist-font-color);
            &:after {
              opacity: 1;
            }
          }
        }
      }
      .coder {
        margin: 0 1em;
        position: relative;
        font-size: 1.8rem;
        margin-left: 1.2em;
        ${mediaNoHover(`margin-left: 1.4em;`)}
        a {
          font-family: var(--coder-font-family);
          font-weight: 300;
          letter-spacing: -2px;
          text-transform: lowercase;
          text-decoration: none;
          transition: color 0.4s ease-in-out;
          &:before {
            content: "#";
            transition: opacity 0.4s ease-in-out;
            opacity: 0;
            position: absolute;
            top: -0.1em;
            left: -0.5em;
            ${mediaNoHover(`opacity: 1;`)}
          }
        }
        &:hover {
          a {
            color: var(--coder-font-color);
            &:before {
              opacity: 1;
            }
          }
        }
      }
      .split {
        display: inline-block;
        width: 0.05em;
        height: 3em;
        background-color: var(--landing-font-color);
      }
    }
  }
`

export default LandingPage
