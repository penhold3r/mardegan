import React, { Component } from 'react'
import Link from 'gatsby-link'
import slugify from 'slugify'
// assets
import products from '../data/products-data'
import hr from '../images/mardegan-hr.svg'
import '../css/products.scss'
//
class Products extends Component {
	constructor() {
		super()
		this.state = { products }
	}
	//
	render() {
		//
		return (
			<section id="#productos" className="products">
				<div className="hr">
					<img src={hr} alt="" />
				</div>
				<header className="prod-header">
					<h1>Productos</h1>
				</header>
				<div className="section-content">
					{this.state.products.map((line, key) => {
						const name = line.name.split(' ')
						const lineName = name.splice(1).join(' ')
						const slug = slugify(line.name.toLowerCase())
						//
						return (
							<div key={key} className="line">
								<h2>
									<span>{name[0]}</span> {lineName}
								</h2>
								<Link to={`/${slug}`}>Ver productos</Link>
								<img src={line.image} alt={line.name} />
							</div>
						)
					})}
				</div>
			</section>
		)
	}
}
//
export default Products
