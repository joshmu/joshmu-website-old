// HELPERS

export const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const rgba = () =>
  `rgba(${rand(0, 255)},${rand(0, 255)},${rand(0, 255)},${rand(0, 100) / 100})`
