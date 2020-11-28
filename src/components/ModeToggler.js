import React from "react"
import { FaSun, FaMoon } from "react-icons/fa"
import { useGlobalContext } from "../context"

const ModeToggler = () => {
  const { toggle, setMode } = useGlobalContext()
  return (
    <div className="flex items-center space-x-2">
      <FaSun className="text-xl dark:text-gray-50" />
      <div className="relative h-7 w-14 border-2 border-gray-700 dark:border-gray-50 rounded-full flex items-center">
        <button
          className={`h-7 w-7 bg-gray-700 dark:bg-gray-50 rounded-full cursor-pointer absolute ${
            toggle ? "right-0" : "left-0"
          }`}
          onClick={setMode}
        >
          {""}
        </button>
      </div>
      <FaMoon className="text-xl dark:text-gray-50" />
    </div>
  )
}

export default ModeToggler
