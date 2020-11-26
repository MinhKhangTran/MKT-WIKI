import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"

const Posts = ({ posts }) => {
  return (
    <div className="breite mt-8">
      {posts.map(post => {
        const {
          id,
          excerpt,
          frontmatter: { category, date, image, title, slug, readTime },
        } = post
        return (
          <Link to={`/posts/${slug}`}>
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 p-4 hover:shadow-2xl"
              key={id}
            >
              <div>
                <Image
                  className="rounded"
                  fluid={image.childImageSharp.fluid}
                />
              </div>
              <div className="flex flex-col">
                <header className="flex justify-between">
                  <h1 className="title text-2xl tracking-wider font-semibold">
                    {title}
                  </h1>
                  <h1>{category}</h1>
                </header>
                <footer className="subtitle flex justify-between text-lg flex-grow ">
                  <h1 className="">{date}</h1>
                  <h1 className="">{readTime}</h1>
                </footer>
                <article className="">{excerpt}</article>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Posts
