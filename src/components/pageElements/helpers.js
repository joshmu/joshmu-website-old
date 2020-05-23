// todo: configure theme settings from tailwind here instead
export const media = {
  xs: styles => `
    @media only screen and (max-width: 475px) {
      ${styles}
    }
  `,
  md: styles => `
    @media only screen and (max-width: 768px) {
      ${styles}
    }
  `,
  lg: styles => `
    @media only screen and (max-width: 1024px) {
      ${styles}
    }
  `,
  xl: styles => `
    @media only screen and (max-width: 1440px) {
      ${styles}
    }
  `,
}

export const spacing = txt => {
  const dict = {
    p: "padding",
    pl: "padding-left",
    pt: "padding-top",
    pr: "padding-right",
    pb: "padding-bottom",
    m: "margin",
    ml: "margin-left",
    mt: "margin-top",
    mr: "margin-right",
    mb: "margin-bottom",
  }

  const [, cmd, val] = txt.match(/(\w+)(\d)/i)

  return `${dict[cmd]}: ${+val / 2}rem;`
}
