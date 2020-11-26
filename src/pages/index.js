import React from "react"
import Layout from "../components/layout"
import AboutMe from "../components/AboutMe"
import Posts from "../components/Posts"

export default function Home({ data }) {
  const {
    allMdx: { nodes: posts },
  } = data
  return (
    <Layout>
      <AboutMe />
      <Posts posts={posts} />
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(limit: 5, sort: { fields: frontmatter___date, order: DESC }) {
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
