import React, { createContext, useState } from "react"

const defaultState = {}
const GlobalContext = createContext(defaultState)

const GlobalProvider = ({ children }) => {
  const [flag, setFlag] = useState(false)

  const toggle = () => {
    setFlag(!flag)
  }

  return (
    <GlobalContext.Provider value={{ flag, toggle }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext

export { GlobalProvider }
