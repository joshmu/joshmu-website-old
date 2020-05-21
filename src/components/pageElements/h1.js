import styled from "styled-components"

export const H1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSize["6xl"]};
  font-family: ${({ theme }) => theme.fontFamily.main};
  margin-top: ${({ theme }) => theme.spacing[8]};
  line-height: ${({ theme }) => theme.lineHeight.none};
`
