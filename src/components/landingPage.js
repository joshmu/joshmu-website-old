import React from "react"

import styled from "styled-components"
import BlockSlide from "./blockSlide"

const LandingPage = () => {
  return (
    <Wrapper>
      <BlockSlide>
        <div className="logo">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <h1>
              {"JOSH MU".split("").map((t, idx) => (
                <span key={idx}>{t}</span>
              ))}
            </h1>
          </a>
        </div>
      </BlockSlide>
      <h2 className="description">
        <span className="artist">
          <a
            href="https://joshmu.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Artist
          </a>
        </span>
        <span className="split">|</span>
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
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .logo {
    letter-spacing: 0.4rem;
    text-transform: uppercase;
    a {
      text-decoration: none;
      h1 {
        font-weight: 300;
        font-size: 4rem;
      }
    }
  }
  .description {
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
          opacity: 0;
          /* right: -0.25em; */
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
      font-size: 2rem;
      a {
        font-family: var(--coder-font-family);
        font-weight: 300;
        letter-spacing: -0.85px;
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
      font-weight: 100;
      font-size: 4rem;
      position: relative;
      top: -1rem;
    }
  }
`

export default LandingPage
