import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const query = graphql`
  {
    file(relativePath: { eq: "minh-khang-tran 1.png" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const AboutMe = () => {
  const data = useStaticQuery(query)
  const {
    file: {
      childImageSharp: { fixed },
    },
  } = data
  return (
    <div className="breite flex space-x-4 items-center md:text-lg">
      <Image
        className="rounded-full w-1/4 border-2 border-lime-600 dark:border-lime-300"
        fixed={fixed}
      />
      <p className="w-3/4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem nesciunt
        officia dolorem ratione repellat aperiam fuga porro ex quae voluptate.
      </p>
    </div>
  )
}

export default AboutMe
