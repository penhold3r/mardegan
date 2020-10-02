module.exports = {
	siteMetadata: {
		title: 'Productos Mardegan',
		siteUrl: 'https://productosmardegan.com'
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				precision: 8
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				google: {
					families: ['Aleo']
				},
				custom: {
					families: ['aleoregular', 'downcome', 'wreath'],
					urls: ['aleo.css', 'downcome.css', 'wreath.css']
				}
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				background_color: '#222222',
				display: 'standalone',
				icon: 'src/images/mardegan-icon.png',
				name: 'Productos Mardegan',
				orientation: 'portrait',
				scope: '/',
				short_name: 'Mardegan',
				start_url: '.',
				theme_color: '#000000'
			}
		},
		`gatsby-plugin-offline`,
		`gatsby-plugin-sitemap`
	]
}
