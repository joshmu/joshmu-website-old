import React, { useEffect } from "react"

import styled from "styled-components"
import { H1, P } from "../pageElements"
import { mediaNoHover } from "../../theme/styleHelpers"
import BlockSlider from "./blockSlider"

import gsap from "gsap"

const LandingPage = () => {
  useEffect(() => {
    // remove flash
    gsap.to("[data-gsap='visibility']", { autoAlpha: 1 })
  }, [])

  return (
    <Wrapper data-gsap="visibility">
      <div className="inner-wrapper">
        <BlockSlider>
          <div className="logo">
            <H1 className="logo-text">
              {"JOSH MU".split("").map((t, idx) => (
                <span key={idx}>{t}</span>
              ))}
            </H1>
          </div>
        </BlockSlider>
        <div className="instructions">
          <P>Who would you like to meet?</P>
        </div>
        <div className="artistOrCoder">
          <h2>
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
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  --landing-bg-color: ${({ theme }) => theme.backgroundColor.main};
  /* hide the font initially in the background-color */
  --landing-font-color: ${({ theme }) => theme.backgroundColor.main};

  /* hide gsap animation flash */
  visibility: hidden;

  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  /* using inner-wrapper so we can set css variables again at later point */
  .inner-wrapper {
    background-color: var(--landing-bg-color);
    color: var(--landing-font-color);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* add slight lift to bring up the content */
    margin-bottom: ${({ theme }) => theme.spacing[12]};

    /* color all links */
    a {
      /* this is specific to the landing page and is manipulated by gsap */
      color: var(--landing-font-color);
    }

    .logo {
      /* add slight shift since text letters are not centered within their respective span elements */
      margin-left: 1em;
      cursor: default;
      .logo-text {
        font-weight: ${({ theme }) => theme.fontWeight.light};
        text-align: center;
        /* font-weight: 300; */
        letter-spacing: ${({ theme }) => theme.letterSpacing.widest};
        text-transform: uppercase;
        line-height: ${({ theme }) => theme.lineHeight.none};
        margin-top: ${({ theme }) => theme.spacing[0]};
        @media (max-width: 475px) {
          font-size: ${({ theme }) => theme.fontSize["4xl"]};
        }
      }
    }
    .instructions {
      font-family: var(--main-font-family);
      opacity: ${({ theme }) => theme.opacity[50]};
      margin-bottom: ${({ theme }) => theme.spacing[4]};
      cursor: default;
    }
    .artistOrCoder {
      margin-top: ${({ theme }) => theme.spacing[4]};
      h2 {
        display: flex;
        justify-content: center;
        align-items: center;
        .artist {
          margin-right: ${({ theme }) => theme.spacing[8]};
          position: relative;
          font-size: ${({ theme }) => theme.fontSize["4xl"]};
          a {
            font-family: ${({ theme }) => theme.fontFamily.artist};
            text-transform: capitalize;
            text-decoration: none;
            transition: color 0.4s ease-in-out;
            &:after {
              /* using 'em' here to be relative to text */
              content: ".";
              transition: opacity 0.4s ease-in-out;
              position: absolute;
              font-size: 1.25em;
              bottom: 0;
              right: -0.15em;
              opacity: ${({ theme }) => theme.opacity[0]};
              ${mediaNoHover(`opacity: 1;`)}
            }
          }
          &:hover {
            a {
              color: ${({ theme }) => theme.fontColor.artist};
              &:after {
                opacity: ${({ theme }) => theme.opacity[100]};
              }
            }
          }
        }
        .coder {
          position: relative;
          font-size: ${({ theme }) => theme.fontSize["2xl"]};
          margin-left: ${({ theme }) => theme.spacing[8]};
          ${mediaNoHover(`margin-left: 1.4em;`)}
          a {
            font-family: ${({ theme }) => theme.fontFamily.coder};
            font-weight: ${({ theme }) => theme.fontWeight.light};
            letter-spacing: ${({ theme }) => theme.letterSpacing.tighter};
            text-transform: lowercase;
            text-decoration: none;
            transition: color 0.4s ease-in-out;
            &:before {
              content: "#";
              transition: opacity 0.4s ease-in-out;
              opacity: ${({ theme }) => theme.opacity[0]};
              position: absolute;
              top: -0.1em;
              left: -0.5em;
              ${mediaNoHover(`opacity: 1;`)}
            }
          }
          &:hover {
            a {
              color: ${({ theme }) => theme.fontColor.coder};
              &:before {
                opacity: ${({ theme }) => theme.opacity[100]};
              }
            }
          }
        }
        .split {
          display: inline-block;
          opacity: ${({ theme }) => theme.opacity[75]};
          width: 2px;
          height: ${({ theme }) => theme.spacing[12]};
          /* this is specific to the landing page and is manipulated by gsap */
          background-color: var(--landing-font-color);
        }
      }
    }
  }
`

export default LandingPage
