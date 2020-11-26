import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

const getToggleMode = () => {
  let toggle = false
  if (localStorage.getItem("toggle")) {
    toggle = JSON.parse(localStorage.getItem("toggle"))
  }
  return toggle
}
const Layout = ({ children }) => {
  const [toggle, setToggle] = React.useState(getToggleMode())
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
  React.useEffect(() => {
    localStorage.setItem("toggle", toggle)
  }, [toggle])
  return (
    <>
      <Navbar toggle={toggle} setMode={setMode} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
