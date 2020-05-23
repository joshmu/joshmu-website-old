import styled, { css } from "styled-components"

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

  box-sizing: border-box;

  /* MODIFIERS */
  /* spacing */
  ${({ spacing, theme }) => spacing && theme.converter(spacing)}
  /* media queries */
  ${({ collapse, theme }) =>
    collapse && theme.media(collapse, `display: none;`)}
`
