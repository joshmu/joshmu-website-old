import styled from "styled-components"

export const Col = styled.div`
  flex: ${({ size }) => (size ? size : 1)};
  flex-wrap: wrap;
  background-color: ${({ bg }) => (bg ? bg : "transparent")};

  /* for the purpose of visual display */
  min-height: 1rem;

  box-sizing: border-box;

  /* MODIFIERS */
  /* spacing */
  ${({ spacing, theme }) => spacing && theme.converter(spacing)}
  /* media queries */
  ${({ collapse, theme }) =>
    collapse && theme.media(collapse, `display: none;`)}
`