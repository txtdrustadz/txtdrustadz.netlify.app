module.exports = {
  siteMetadata: {
    title: `txtdrustadz - update your 🧠`,
    description: `Di tengah banjir informasi, kami menyaring berita dari berbagai sumber untuk menyajikan informasi terkini dengan perspektif Islam.`,
    author: `@txtdrustadz`,
    siteUrl: `https://txtdrustadz.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FFCE03`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/txtdrustadz.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
