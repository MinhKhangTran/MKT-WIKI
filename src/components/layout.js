import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
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
  return (
    <>
      <Navbar toggle={toggle} setMode={setMode} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
