import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const Error = () => {
  return (
    <Layout>
      <div
        className="breite flex flex-col justify-center items-center"
        style={{ height: "calc(100vh - 150px)" }}
      >
        <h1>Sorry diese Seite gibt es nicht</h1>
        <Link className="btn" to="/">
          zurück zur Homepage
        </Link>
      </div>
    </Layout>
  )
}

export default Error
