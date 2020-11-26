import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
const CategoryTemplate = props => {
  const {
    allMdx: { nodes: categories },
  } = props.data
  console.log(props.path.split("/")[1])
  return (
    <Layout>
      <h1>{props.path.split("/")[1]}</h1>
      {categories.map(category => {
        return <h1>{category.frontmatter.title}</h1>
      })}
    </Layout>
  )
}

export const query = graphql`
  query GetCategory($category: String) {
    allMdx(
      filter: { frontmatter: { category: { eq: $category } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          slug
          author
          category
          date(formatString: "MMM Do, YYYY")
          readTime
          title
          image {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
        excerpt(pruneLength: 10)
      }
    }
  }
`

export default CategoryTemplate
