import styled, { css } from "styled-components"
import { media, spacing } from "./helpers"

export const Content = styled.div`
  height: 100%;
  width: 100%;

  /* 'center' will center the child elem as well as have options to move elem off the center */
  ${({ center }) =>
    center &&
    css`
      display: flex;
      /* control positioning of child element if we do not want it centered */
      justify-content: ${({ x }) => (x ? x : "center")};
      align-items: ${({ y }) => (y ? y : "center")};
      > * {
        margin: 0;
        padding: 0;
      }
    `}

  /* spacing */
  box-sizing: border-box;
  ${({ margin }) => margin && spacing(margin)}
  ${({ padding }) => padding && spacing(padding)}

  /* media queries */
  ${props => props.collapse && media[props.collapse](`display: none;`)}
`
