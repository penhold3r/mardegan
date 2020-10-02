const path = require(`path`)

exports.createPages = ({ actions }) => {
	const { createPage } = actions

	const lines = [
		{ slug: 'linea-clasica' },
		{ slug: 'linea-gourmet' },
		{ slug: 'linea-gastronomica' }
	]

	lines.forEach(line => {
		const { slug } = line

		console.log(line)

		createPage({
			path: slug,
			component: path.resolve(`src/templates/lines.js`),
			context: {
				slug
			}
		})
	})
}
