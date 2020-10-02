import React, { Component } from 'react'
import PropTypes from 'prop-types'
import slugify from 'slugify'
// components
import Header from '../components/Header'
// assets
import products from '../data/products-data'
import '../css/lines.scss'
//
class Lines extends Component {
	constructor() {
		super()
		this.state = { products }
	}
	render() {
		const {
			location,
			location: { pathname }
		} = this.props
		const slug = pathname.replace(/^\/|\/$/g, '')
		const { products } = this.state
		const line = products.find(line => slugify(line.name.toLowerCase()) === slug)

		return (
			<React.Fragment>
				<Header location={location} />
				<section className="line animated fadeInUp">
					<h1>{line.name}</h1>
					{line.name === 'Línea Gastronómica' ? (
						<div className="gastro-grid">
							{line.packs.map((pack, key) => (
								<div key={key} className="pack-wrapper">
									<img className="prod-img" src={pack.src} alt={pack.name} />
									<ul className="prod-list">
										{pack.products.map((prod, key) => (
											<li key={key} className="prod">
												{prod.name} <span>{prod.weight}</span>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					) : (
						<div className="prods-grid">
							{line.products.map((prod, key) => (
								<div className="prod-item" key={key}>
									<img src={prod.image} alt={prod.name} />
									<h2>{prod.name}</h2>
									<h3>{prod.packaging}</h3>
								</div>
							))}
						</div>
					)}
				</section>
			</React.Fragment>
		)
	}
}
//
Lines.propTypes = {
	location: PropTypes.object
}
//
export default Lines
