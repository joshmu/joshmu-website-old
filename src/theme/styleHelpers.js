import { css } from "styled-components"

export const mediaNoHover = styles => css`
  /* smartphones, touchscreens */
  @media (hover: none) {
    ${styles}
  }
`
