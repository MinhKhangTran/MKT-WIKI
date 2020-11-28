import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { FaGithub } from "react-icons/fa"

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
    <div className="breite flex space-x-4 items-center md:text-lg mt-4">
      <Image
        className="rounded-full w-1/4 border-2 border-lime-600 dark:border-lime-300"
        fixed={fixed}
      />
      <article className="w-3/4">
        <div className="title">Minh Khang Tran</div>
        <p>
          Berechnungsingenieur, Powerlifter aus Leidenschaft, Hobby Web
          developer, Versucht seit Ewigkeiten koreanisch zu lernen
        </p>
        <p>Ein Blog um zum lernen (und vllt auch zum lehren)</p>
      </article>
    </div>
  )
}

export default AboutMe
