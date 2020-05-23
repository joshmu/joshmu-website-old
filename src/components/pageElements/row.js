import styled from "styled-components"
import { media, spacing } from "./helpers"

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: ${({ height }) =>
    typeof height === "string" ? height : `${height}rem`};

  /* spacing */
  box-sizing: border-box;
  ${({ margin }) => margin && spacing(margin)}
  ${({ padding }) => padding && spacing(padding)}

  /* media queries */
  ${props => props.collapse && media[props.collapse](`display: none;`)}
`
