module.exports = {
  siteMetadata: {
    title: `Tiff Dev: FAQs & Info`,
    description: `Some facts and info about me, Tiffany White, Frontend Engineer.`,
    author: `@tiffanywhitedev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tiff Dev: FAQs`,
        short_name: `FAQs`,
        start_url: `/`,
        background_color: `#06d7d9`,
        theme_color: `#06d7d9`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
