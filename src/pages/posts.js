import React from "react"
import Layout from "../components/layout"
import Posts from "../components/Posts"
import { graphql } from "gatsby"

const PostsPage = ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data
  return (
    <Layout className="breite">
      <Posts posts={posts} title="Alle Beiträge" />
    </Layout>
  )
}
export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, skip: 1) {
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
export default PostsPage
