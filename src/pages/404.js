import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <SEO title="Error :(" />
      <div
        className="breite flex flex-col justify-center items-center"
        style={{ height: "calc(100vh - 240px)" }}
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
