import styled from "styled-components"

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;

  /* MODIFIERS */
  ${({ theme }) => theme.modifiers}
`
