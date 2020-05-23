import styled from "styled-components"

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: ${({ height }) =>
    typeof height === "string" ? height : `${height}rem`};

  box-sizing: border-box;

  /* MODIFIERS */
  ${({ theme }) => theme.modifiers}
`
