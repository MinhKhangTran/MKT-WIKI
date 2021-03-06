import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Posts from "../components/Posts"
import { FaAngleDoubleLeft } from "react-icons/fa"
import SEO from "../components/SEO"
const CategoryTemplate = props => {
  const {
    allMdx: { nodes: categories },
  } = props.data
  // console.log(props.path.split("/")[1])
  // console.log(categories)
  const categoryAsString = props.path.split("/")[1]
  const categoryFirstLetterUppercase =
    categoryAsString.charAt(0).toUpperCase() + categoryAsString.slice(1)
  // console.log(categoryFirstLetterUppercase)
  return (
    <Layout>
      <SEO title={categoryFirstLetterUppercase} />
      <div className="breite capitalize">
        <h1>{props.path.split("/")[1]}</h1>
      </div>
      <Posts posts={categories} />
      <div className="breite">
        <Link to="/" className="btn flex items-center">
          <FaAngleDoubleLeft className="mr-2" />
          Alle Beiträge
        </Link>
      </div>
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
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt
        id
      }
    }
  }
`

export default CategoryTemplate
