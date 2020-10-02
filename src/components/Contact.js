import React, { Component } from 'react'
import submitForm from '../data/submit-form'
// assets
import leaf from '../images/mardegan-leafs.svg'
import hr from '../images/mardegan-hr.svg'
import mapLink from '../images/mardegan-location.svg'
import napkin from '../images/mardegan-napkin.svg'
import '../css/contact.scss'
//
class Contact extends Component {
	constructor() {
		super()
		this.state = {}
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	//
	handleSubmit(e) {
		const submitSettings = {
			dest: '/',
			name: 'contact',
			fields: '.form-field',
			successMsg: 'Mensaje enviado!',
			errorMsg: 'Hubo un error, intente más tarde. :(',
			urlencoded: true,
		}
		e.preventDefault()
		console.log(e.currentTarget)
		//submitForm(this.refs.form, submitSettings);
	}
	//
	render() {
		//
		return (
			<section className='contact'>
				<div className='hr'>
					<img src={hr} alt='' />
				</div>
				<div className='hr leaf'>
					<img src={leaf} alt='' />
				</div>
				<div className='contact-content'>
					<div className='contact-info'>
						<h1>Contáctenos</h1>
						<p>
							Pascual Suárez y Ruta 40 vieja, <br />
							Tres Esquinas, San Carlos, Mendoza
						</p>
						<p>
							<a href='tel:262215554055'>
								<em>Tel: 2622 15 554 055</em>
							</a>
						</p>
						<p>
							<a href='mailto:info@productosmardegan.com'>
								<em>info@productosmardegan.com</em>
							</a>
						</p>
						<p>
							<a
								href='https://goo.gl/maps/p1srYsz3pEK2'
								className='location'
								target='_blank'
								rel='noopener noreferrer'>
								<img src={mapLink} alt='Map' />
							</a>
						</p>
					</div>
					<form
						id='form'
						name='contact'
						method='post'
						onSubmit={this.handleSubmit}
						ref='form'
						data-netlify='true'
						data-netlify-honeypot='bot-field'>
						<input type='hidden' name='bot-field' />
						<input type='hidden' name='form-name' value='contact' />
						<input
							type='text'
							name='name'
							className='form-field'
							placeholder='Nombre'
							required
						/>
						<input
							type='email'
							name='email'
							className='form-field'
							placeholder='E-mail'
							required
						/>
						<textarea
							name='message'
							className='form-field'
							placeholder='Mensaje'
							required></textarea>
						<input type='submit' className='send-btn' value='Enviar' />
					</form>
				</div>
				<div className='napkin'>
					<img src={napkin} alt='' />
				</div>
			</section>
		)
	}
}
//
export default Contact
