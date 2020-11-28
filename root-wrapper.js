import React from "react"
import { MDXProvider } from "@mdx-js/react"
import "./src/css/main.css"
import { AppProvider } from "./src/context"

export const wrapRootElement = ({ element }) => {
  return (
    <AppProvider>
      <MDXProvider>{element}</MDXProvider>
    </AppProvider>
  )
}
