import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { isMobile } from 'react-device-detect'
// components
import DOMHead from './DOMHead'
import Footer from './Footer'
// assets
import metadata from '../data/metadata'
import 'sanitize.css'
import 'animate.css'
import '../css/index.scss'
//
if (typeof window !== 'undefined') {
	// eslint-disable-next-line global-require
	require('smooth-scroll')('a.scroll-link[href*="#"]', {
		speed: 800,
		speedAsDuration: true,
		easing: 'easeInOutCubic',
		offset: isMobile ? 100 : 0
	})
}
//
class Layout extends Component {
	constructor(props) {
		super(props)
		this.handleScrolling = this.handleScrolling.bind(this)
	}
	//
	handleScrolling(e) {
		const scrolled =
			window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
		const header = document.querySelector('#header')
		//
		header.classList.toggle('opaque', scrolled >= 500)
	}
	//
	componentDidMount() {
		window.addEventListener('scroll', this.handleScrolling)
	}
	//
	render() {
		return (
			<React.Fragment>
				<DOMHead metadata={metadata} />
				{this.props.children}
				<Footer />
			</React.Fragment>
		)
	}
}
//
Layout.propTypes = {
	children: PropTypes.array
}
//
export default Layout
