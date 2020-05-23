import styled from "styled-components"
import { media, spacing } from "./helpers"

export const Col = styled.div`
  flex: ${({ size }) => (size ? size : 1)};
  flex-wrap: wrap;
  background-color: ${({ bg }) => (bg ? bg : "transparent")};

  /* for the purpose of visual display */
  min-height: 1rem;

  /* spacing */
  box-sizing: border-box;
  ${({ margin }) => margin && spacing(margin)}
  ${({ padding }) => padding && spacing(padding)}

  /* media queries */
  ${props => props.collapse && media[props.collapse](`display: none;`)}
`
