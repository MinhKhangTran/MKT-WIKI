import React from "react"

export const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  // Local Storage
  // const getToggleMode = () => {
  //     let toggle = false
  //     if (localStorage.getItem("toggle")) {
  //       toggle = JSON.parse(localStorage.getItem("toggle"))
  //     }
  //     return toggle
  //   }

  // const [toggle, setToggle] = React.useState(getToggleMode())
  const [toggle, setToggle] = React.useState(false)
  const setMode = () => {
    setToggle(!toggle)
  }

  React.useEffect(() => {
    if (toggle) {
      document.documentElement.className = "dark"
    } else {
      document.documentElement.className = ""
    }
  }, [toggle])
  // React.useEffect(() => {
  //   localStorage.setItem("toggle", toggle)
  // }, [toggle])
  return (
    <AppContext.Provider value={{ toggle, setMode }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return React.useContext(AppContext)
}
