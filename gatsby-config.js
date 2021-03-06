module.exports = {
  siteMetadata: {
    title: `Holt Village Hall - Wiltshire`,
    author: `@dougajmcdonald`,
    description: `Holt Village Hall - Wiltshire`,
    url: `https://github.com/dougajmcdonald/holt-village-hall`, // No trailing slash allowed!
    image: `images/logo-dark.png`, // Path to your image you placed in the 'static' folder
    twitterUsername: `@dougajmcdonald`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content/blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-images`,
        path: `${__dirname}/content/assets`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Holt Village Hall`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#293241`,
        theme_color: `#98C1D9`,
        display: `minimal-ui`,
        icon: `src/images/logo-dark.png` // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-embed-youtube`,
            options: {
              width: 800,
              height: 400
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-plugin-react-helmet`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
              wrapperStyle:
                "margin-left: 0!important; margin-right: 0!important;"
            }
          }
        ]
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /svg/
        }
      }
    },
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-151907671-2`
      }
    }
  ]
}
