import React from "react"
import ModeToggler from "./ModeToggler"
import Logo from "../assets/Logo_Lib 1.svg"
import Logo_Dark from "../assets/Logo_Lib 1 dark.svg"
import { Link } from "gatsby"
import { useGlobalContext } from "../context"
const Navbar = () => {
  const { toggle } = useGlobalContext()
  return (
    <div className="breite flex justify-between mt-8">
      <Link to="/">
        <img
          className="dark:text-gray-50"
          src={`${toggle ? Logo_Dark : Logo}`}
          alt="MKT WIKI"
        />
      </Link>
      <ModeToggler />
    </div>
  )
}

export default Navbar
