export const getCssVar = cssVar =>
  getComputedStyle(document.documentElement).getPropertyValue(cssVar)
