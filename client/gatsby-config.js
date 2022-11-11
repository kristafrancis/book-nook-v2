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
   //`gatsby-plugin-apollo`
   
{
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: 'http://localhost:3001/graphql'
      }
    }

  ],
};
