import React from "react"
import Layout from "../components/layout"
import AboutMe from "../components/AboutMe"
import Posts from "../components/Posts"
import Categories from "../components/Categories"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

export default function Home({ data }) {
  const {
    allMdx: { nodes: posts },
  } = data
  return (
    <Layout>
      <SEO title="Home" />
      <AboutMe />
      <Categories />
      <Posts posts={posts} />
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        frontmatter {
          category
          date(formatString: "MMM Do, YYYY")
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          readTime
          slug
          title
        }
        excerpt
      }
    }
  }
`
