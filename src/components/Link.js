import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

const Link = ({ children, to, activeClassName, ...other }) => {
	const internal = /^\/(?!\/)/.test(to)

	return internal ? (
		<GatsbyLink to={to} activeClassName={activeClassName} {...other}>
			{children}
		</GatsbyLink>
	) : (
		<a href={to} {...other} rel="noopener noreferrer">
			{children}
		</a>
	)
}

export default Link
