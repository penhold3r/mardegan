import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby-link'
// assets
import '../css/home.scss'
import bgImg from '../images/mardegan-landing.jpg'
import badge from '../images/mardegan-badge.svg'
import welcome from '../images/mardegan-welcome.svg'
//
class Home extends Component {
	constructor() {
		super()
		this.handleClick = this.handleClick.bind(this)
	}
	//
	handleClick(e) {
		e.preventDefault()
		this.props.prodClick('productos')
	}
	//
	render() {
		const sectionBg = `url('${bgImg}') no-repeat center 80% fixed / cover`
		console.log(sectionBg)
		//
		return (
			<section className='home' style={{ backgroundImage: `url('${bgImg}')` }}>
				<div className='badge'>
					<img src={badge} alt='Nuevos productos online' />
				</div>
				<div className='section-content'>
					<div className='home-welcome animated fadeIn'>
						<img
							src={welcome}
							alt='Crecimos disfrutando los Sabores y Aromas de estas tierras.'
						/>
					</div>
					<p className='call-to animated fadeIn'>
						<a href='#productos' className='btn scroll-link'>
							Conozca nuestros productos
						</a>
					</p>
				</div>
			</section>
		)
	}
}
//
Home.propTypes = {
	prodClick: PropTypes.func,
}
//
export default Home
