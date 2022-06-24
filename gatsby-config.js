const todayDate = new Date().toISOString().slice(0, 10)
module.exports = {
  siteMetadata: {
    title: `MAWA Polska`,
    author: `Konrad Kochaniewicz`,
    siteUrl: `https://mawa-polska.pl`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    "gatsby-plugin-htaccess",
    `gatsby-plugin-emotion`,
    "gatsby-plugin-robots-txt",
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `{
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            nodes {
              path
            }
          }
        }`,
        resolveSiteUrl: ({ site }) => {
          return site.siteMetadata.siteUrl
        },
        resolvePages: ({ allSitePage: { nodes: allPages } }) => {
          const sitePageNodeMap = allPages.reduce((acc, node) => {
            const { uri } = node
            acc[uri] = node

            return acc
          }, {})

          return allPages.map(page => {
            return { ...page, ...sitePageNodeMap[page.path] }
          })
        },
      },
      serialize: ({ path, modifiedGmt }) => {
        return {
          url: path,
          lastmod: modifiedGmt,
        }
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-TCC85RP",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Ubuntu\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `newses`,
        path: `${__dirname}/src/images/newses`,
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
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
