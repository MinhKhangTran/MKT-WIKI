import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { FaClock } from "react-icons/fa"

const Posts = ({ posts, title }) => {
  return (
    <div className="breite mt-4 mb-8">
      <h1 className="text-xl">{title}</h1>
      {posts.map(post => {
        const {
          id,
          excerpt,
          frontmatter: { category, date, image, title, slug, readTime },
        } = post
        return (
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 py-4"
            key={id}
          >
            <div>
              <Image className="rounded" fluid={image.childImageSharp.fluid} />
            </div>
            <div className="flex flex-col">
              <header className="flex justify-between">
                <h1 className="title text-2xl tracking-wider font-semibold">
                  {title}
                </h1>
                <Link to={`/${category}`}>
                  <h1 className="items-center flex category capitalize px-3 rounded-full py-1">
                    {category}
                  </h1>
                </Link>
              </header>
              <footer className="subtitle flex text-base flex-grow  items-start space-x-2 ">
                <h1 className="">{date}</h1>
                <span> &#183; </span>
                <h1 className="flex items-center">
                  <FaClock className="mr-2 flex" />
                  Lesezeit: {readTime} min
                </h1>
              </footer>
              <Link to={`/posts/${slug}`}>
                <article className="">{excerpt}</article>
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Posts
