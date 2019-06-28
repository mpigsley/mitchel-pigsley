module.exports = {
  siteMetadata: {
    title: 'Mitchel Pigsley',
    description:
      'Software developer and amateur audio engineer from Omaha, Nebraska.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/static`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-favicon',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    'gatsby-plugin-emotion',
  ],
};
