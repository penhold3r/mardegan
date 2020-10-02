import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import ReactDOM from 'react-dom'
//import scrollToComponent from 'react-scroll-to-component'
// components
import Layout from '../components/Layout'
import Header from '../components/Header'
// sections
import Home from '../components/Home'
import About from '../components/About'
import Products from '../components/Products'
import Contact from '../components/Contact'
//
class IndexPage extends Component {
	constructor() {
		super()
		this.state = {
			scrollToComponent: null
		}
		this.handleScrollTo = this.handleScrollTo.bind(this)
	}
	//
	handleScrollTo(section) {
		// const ref = ReactDOM.findDOMNode(this.refs[section])
		// const { scrollToComponent } = this.state
		// scrollToComponent(ref, {
		// 	offset: 0,
		// 	align: 'top',
		// 	duration: 1000,
		// 	ease: 'inOutSine'
		// })
	}
	//
	render() {
		const { location } = this.props
		//
		return (
			<Layout>
				<Header menuClick={this.handleScrollTo} location={location} />
				<Home prodClick={this.handleScrollTo} />
				<About ref="quienes-somos" />
				<Products ref="productos" />
				<Contact ref="contacto" />
			</Layout>
		)
	}
}
//
IndexPage.propTypes = {
	location: PropTypes.object
}
//
export default IndexPage
