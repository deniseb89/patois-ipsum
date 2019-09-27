module.exports = {
    siteMetadata: {
        title: `Patois Ipsum`,
        description: `A dummy text generator made with Jamaican Patois instead of Latin.`,
        author: `@deniseb89`,
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
                name: `patois-ipsum`,
                short_name: `patois-ipsum`,
                start_url: `/`,
                background_color: `#1f1c1c`,
                theme_color: `#1f1c1c`,
                display: `minimal-ui`
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
