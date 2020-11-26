import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const PostTemplate = ({ data }) => {
  const {
    mdx: {
      frontmatter: { slug },
    },
  } = data
  return (
    <Layout>
      <h1>{slug}</h1>
    </Layout>
  )
}
export const query = graphql`
  query GetSinglePost($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        category
        date(formatString: "MMM Do,YYYY")
        readTime
        slug
        title
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`

export default PostTemplate
