import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, navigate } from 'gatsby'
import slugify from 'slugify'
//
import products from '../data/products-data'
import logo from '../images/mardegan-logo.svg'
import '../css/header.scss'
import '../css/nav.scss'
import '../css/mobile-menu.scss'
//
class Header extends Component {
	constructor() {
		super()
		this.state = {
			menu: ['Inicio', 'Quienes Somos', 'Productos', 'Contacto']
		}
		this.handleClick = this.handleClick.bind(this)
		this.handleMenuClick = this.handleMenuClick.bind(this)
	}
	//
	handleClick(e, link) {
		//const section = e.target.getAttribute('href').replace(/^\/|\/$/g, '')
		const { pathname } = this.props.location
		const header = document.querySelector('#header')
		const mobileMenu = document.querySelector('.mobile-menu')
		//
		header.classList.remove('expanded')
		mobileMenu.classList.remove('crossed')
		//
		navigate(`${pathname === '/' ? '#' : ''}${slugify(link.toLowerCase())}`)
	}
	//
	handleMenuClick(e) {
		const header = document.querySelector('#header')
		header.classList.toggle('expanded')
		e.currentTarget.classList.toggle('crossed')
	}
	//
	render() {
		const { menu } = this.state
		const { pathname } = this.props.location
		const links = pathname === '/' ? menu : products.map(line => line.name)
		const classLink = pathname === '/' ? 'main-link scroll-link' : 'line-link'
		//
		return (
			<header id="header" className="main-header animated fadeInDown">
				<h1 id="logo">
					<Link to="/" title="Mardegan">
						<img src={logo} alt="Mardegan" />
					</Link>
				</h1>
				<nav className="main-nav">
					<ul>
						{links.map((item, key) => (
							<li key={key}>
								<a className={classLink} onClick={e => this.handleClick(e, item)}>
									{item}
								</a>
							</li>
						))}
					</ul>
				</nav>
				<div className="mobile-menu" onClick={this.handleMenuClick}>
					<span className="menu-bar" />
					<span className="menu-bar" />
					<span className="menu-bar" />
				</div>
			</header>
		)
	}
}
//
Header.propTypes = {
	menuClick: PropTypes.func,
	location: PropTypes.object
}
//
export default Header
