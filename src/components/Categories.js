import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const query = graphql`
  {
    allMdx {
      distinct(field: frontmatter___category)
    }
  }
`

const Categories = () => {
  const data = useStaticQuery(query)
  const {
    allMdx: { distinct: categories },
  } = data

  return (
    <div className="breite mt-6 mb-4">
      <h1 className="title">Bisherige Kategorien:</h1>
      {categories.map((category, index) => {
        return (
          <Link className="mr-6 uppercase" key={index} to={`/${category}`}>
            {category}
          </Link>
        )
      })}
    </div>
  )
}

export default Categories
