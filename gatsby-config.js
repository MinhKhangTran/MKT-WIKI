require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `MKT WIKI`,
    description: `Mein persönlicher Blog. Inspiriert von John Smilga und Dan Abramov. Simple gehalten mit Dark mode, Reading Time, Gatsby und Tailwind. Gehostet von Netlify`,
    author: `@mkt`,
    titleTemplate: `%s | MKT WIKI`,
    url: `https://mkt-wiki.netlify.app/`,
    image: `mainBcg.PNG`,
    twitterUsername: ``,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [{ resolve: "gatsby-remark-images" }],
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API, // may instead specify via env, see below
        concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: `About`,
            mapping: { notes: `text/markdown`, image: `fileNode` }, // optional, e.g. "text/markdown", "fileNode"
          },
        ],
      },
    },
  ],
}
