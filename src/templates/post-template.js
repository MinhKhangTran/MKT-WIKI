import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Image from "gatsby-image"
import { FaAngleDoubleLeft } from "react-icons/fa"
import SEO from "../components/SEO"

const PostTemplate = ({ data }) => {
  const {
    mdx: {
      frontmatter: { title, image },
      body,
    },
  } = data

  return (
    <Layout>
      <SEO title={title} image={image.childImageSharp.fluid.src} />
      <div className="breite">
        <Image fluid={image.childImageSharp.fluid} />

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
      frontmatter {
        title
        category
        date(formatString: "MMMM Do, YYYY")
        image {
          childImageSharp {
            fluid {
              src
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
    }
  }
`

export default PostTemplate
