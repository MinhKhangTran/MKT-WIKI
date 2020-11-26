/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `MKT WIKI`,
    description: `Gatsby Airtable Example. Built using Airtable, Algolia Search, Gatsby Background Image plugin and  React Context API. Containts two sliders, real-time Airtable updates and submenus. Styled using Styled-Components. `,
    author: `@johnsmilga`,
    titleTemplate: `%s | MKT WIKI`,
    url: `https://gatsby-airtable-design-project.netlify.app/`,
    image: `mainBcg.png`,
    twitterUsername: `@john_smilga`,
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
    // {
    //   resolve: `gatsby-source-airtable`,
    //   options: {
    //     apiKey: process.env.GATSBY_AIRTABLE_API,
    //     concurrency: 5,
    //     tables: [
    //       {
    //         baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
    //         tableName: `Projects`,
    //         mapping: { image: `fileNode` },
    //       },
    //       {
    //         baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
    //         tableName: `Customers`,
    //         mapping: { image: `fileNode` },
    //       },
    //     ],
    //   },
    // },
    ,
  ],
}
