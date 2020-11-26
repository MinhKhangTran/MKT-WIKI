import React from "react"
import { MDXProvider } from "@mdx-js/react"
import "./src/css/main.css"

export const wrapRootElement = ({ element }) => {
  return <MDXProvider>{element}</MDXProvider>
}
