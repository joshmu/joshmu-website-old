import React from "react"

const Footer = () => {
  return (
    <footer>
      © {new Date().getFullYear()}, Built by
      {` `}
      <a href="https://joshmu.com">MU</a>
    </footer>
  )
}

export default Footer
