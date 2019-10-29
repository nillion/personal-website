module.exports = {
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-92396091-2",
                head: true,
                anonymize: true,
                respectDNT: true,
                exclude: [],
                pageTransitionDelay: 0,
                cookieDomain: "nillion.dev",
            },
        }
    ],
}
