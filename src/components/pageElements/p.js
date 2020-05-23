import styled, { css } from "styled-components"

export const P = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.base};
    margin-top: ${theme.spacing[3]};
  `}

  /* MODIFIERS */
  ${({ theme }) => theme.modifiers}
`
