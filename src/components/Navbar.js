import React from "react"
import ModeToggler from "./ModeToggler"
import Logo from "../assets/Logo_Lib 1.svg"
import Logo_Dark from "../assets/Logo_Lib 1 dark.svg"

const Navbar = ({ toggle, setMode }) => {
  return (
    <div className="breite flex justify-between mt-8">
      <img
        className="dark:text-gray-50"
        src={`${toggle ? Logo_Dark : Logo}`}
        alt="MKT WIKI"
      />
      <ModeToggler toggle={toggle} setMode={setMode} />
    </div>
  )
}

export default Navbar
