import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Image from "gatsby-image"
import { FaAngleDoubleLeft } from "react-icons/fa"

const PostTemplate = ({ data }) => {
  const {
    mdx: {
      frontmatter: { title, category, image, date },
      body,
    },
  } = data

  return (
    <Layout>
      <div className="breite">
        <Image className="mb-8" fluid={image.childImageSharp.fluid} />

        <MDXRenderer>{body}</MDXRenderer>
        <Link to="/" className="btn flex items-center">
          <FaAngleDoubleLeft className="mr-2" />
          Alle Beiträge
        </Link>
      </div>
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
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default PostTemplate
