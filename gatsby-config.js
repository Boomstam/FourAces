const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Four Aces Guitar Quartet`,
  },
  plugins: [
      'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-lightbox',
        short_name: 'starter-lightbox',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `composers`,
        path: `${__dirname}/src/images/composers/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `text`,
        path: `${__dirname}/src/text`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `logo`,
        path: `${__dirname}/src/images/logos/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`, 
        path: path.join(__dirname, `src`, `images`)
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `audio`, 
        path: path.join(__dirname, `src`, `audio`)
      },
    },
    
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-rehype-images`,
            options: {
              tag: 'rehype-image'
            }
          },
        ],
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}