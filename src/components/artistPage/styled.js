import styled, { css } from 'styled-components'

export const media = {
  xs: (styles) => `
    @media only screen and (max-width: 480px) {
      ${styles}
    }
  `,
  md: (styles) => `
    @media only screen and (max-width: 768px) {
      ${styles}
    }
  `,
  lg: (styles) => `
    @media only screen and (max-width: 1024px) {
      ${styles}
    }
  `,
  xl: (styles) => `
    @media only screen and (max-width: 1440px) {
      ${styles}
    }
  `,
}

const spacing = (txt) => {
  const dict = {
    p: 'padding',
    pl: 'padding-left',
    pt: 'padding-top',
    pr: 'padding-right',
    pb: 'padding-bottom',
    m: 'margin',
    ml: 'margin-left',
    mt: 'margin-top',
    mr: 'margin-right',
    mb: 'margin-bottom',
  }

  const [, cmd, val] = txt.match(/(\w+)(\d)/i)

  return `${dict[cmd]}: ${+val / 2}rem;`
}
// styled components
export const Grid = styled.div``

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: ${({ height }) =>
    typeof height === 'string' ? height : `${height}rem`};

  /* spacing */
  box-sizing: border-box;
  ${({ margin }) => margin && spacing(margin)}
  ${({ padding }) => padding && spacing(padding)}

  /* media queries */
  ${(props) => props.collapse && media[props.collapse](`display: none;`)}
`

export const Col = styled.div`
  flex: ${({ size }) => size};
  flex-wrap: wrap;
  background-color: ${({ bg }) => (bg ? bg : 'rebeccapurple')};

  /* for the purpose of visual display */
  min-height: 1rem;

  /* spacing */
  box-sizing: border-box;
  ${({ margin }) => margin && spacing(margin)}
  ${({ padding }) => padding && spacing(padding)}

  /* media queries */
  ${(props) => props.collapse && media[props.collapse](`display: none;`)}
`

export const Content = styled.div`
  height: 100%;
  width: 100%;

  /* 'center' will center the child elem as well as have options to move elem off the center */
  ${({ center }) =>
    center &&
    css`
      display: flex;
      /* control positioning of child element if we do not want it centered */
      justify-content: ${({ x }) => (x ? x : 'center')};
      align-items: ${({ y }) => (y ? y : 'center')};
      > * {
        margin: 0;
        padding: 0;
      }
    `}

  /* spacing */
  box-sizing: border-box;
  ${({ margin }) => margin && spacing(margin)}
  ${({ padding }) => padding && spacing(padding)}

  /* media queries */
  ${(props) => props.collapse && media[props.collapse](`display: none;`)}
`
