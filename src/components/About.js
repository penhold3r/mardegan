import React, { Component } from 'react'
import { Parallax } from 'react-parallax'
// assets
import '../css/about.scss'
import bgImg from '../images/mardegan-about.jpg'
//
class About extends Component {
	constructor() {
		super()
		this.state = {
			bgStyle: { 'object-fit': 'cover', width: '100%' },
			disabled: false,
		}
	}
	//
	componentDidMount() {
		const disabled = window.innerWidth < 600
		this.setState({ disabled })
	}
	//
	render() {
		const { bgStyle, disabled } = this.state
		//
		return (
			<Parallax
				blur={0}
				bgImage={bgImg}
				bgImageAlt='Mardegan'
				bgStyle={bgStyle}
				strength={300}
				disabled={disabled}>
				<section className='about'>
					<div className='section-content'>
						<header className='about-header'>
							<h1>
								<span>Somos</span>
								<br />
								Productores Mendocinos
							</h1>
						</header>
						<div className='about-text'>
							<p>
								Un emprendimiento familiar agrícola, que comenzó en el año 2007. Los
								fundadores Javier y Gonzalo Appiolaza tenían una visión común y juntos
								crearon un modelo de negocio el cual buscan industrializar la producción.
								Fue así como el modelo y la visión se convirtieron en pasión que se
								transformó en empresa.
							</p>
							<p>
								En el año 2013 resultamos seleccionados por el programa Nacional de apoyo al
								empresariado joven, por el Ministerio de Industria de la Nación.
							</p>
							<p>
								Gracias a este espíritu emprendedor nos sentimos orgullosos de lograr poner
								en marcha este gran sueño que buscamos desde que nos iniciamos en la
								producción agrícola.
							</p>
							<p className='feat-text'>
								<em>
									Así nace Mardegan, pasión por la producción y demostrando que los sueños
									se pueden alcanzar.
								</em>
							</p>
						</div>
					</div>
				</section>
			</Parallax>
		)
	}
}
//
export default About
