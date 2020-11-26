import React from "react"
import Layout from "../components/layout"
import AboutMe from "../components/AboutMe"
import Posts from "../components/Posts"

export default function Home() {
  return (
    <Layout>
      <AboutMe />
      <Posts />
    </Layout>
  )
}
