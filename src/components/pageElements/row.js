import styled from "styled-components"

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: ${({ height }) =>
    typeof height === "string" ? height : `${height}rem`};

  box-sizing: border-box;

  /* MODIFIERS */
  /* spacing */
  ${({ spacing, theme }) => spacing && theme.converter(spacing)}
  /* media queries */
  ${({ collapse, theme }) =>
    collapse && theme.media(collapse, `display: none;`)}
`
