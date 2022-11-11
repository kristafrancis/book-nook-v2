module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-postcss`,

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Poppins\:200,300,400,500,600,700,800,900`],
        display: "swap",
      },
    },
    `gatsby-plugin-apollo`,
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: 'https://example.com/graphql'
      }
    },
    `gatsby-source-mongodb`,
    {
    resolve: `gatsby-source-mongodb`,
      options: { dbName: `local`, collection: `documents` },
      query: { documents: { as_of: { $gte: 1604397088013 } } },
  }
  ],
};
