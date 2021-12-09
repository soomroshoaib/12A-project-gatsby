module.exports={
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `11id8984y0af`,
        accessToken: `a5dqeRdXWub1-ekWpeMh74v3w_gNbljwwdVUy72nwqw`,
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
       
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, 
      },
    },
    
  ],




    // plugins: [
    //   "gatsby-plugin-typescript",
    //   {
    //     resolve: `gatsby-source-contentful`,
    //     options: {
    //       spaceId: `11id8984y0af`,
    //       accessToken: `a5dqeRdXWub1-ekWpeMh74v3w_gNbljwwdVUy72nwqw`,
    //     },
    //   },
    // ],
  

}
