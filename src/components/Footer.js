import React from 'react'
// assets
import hr from '../images/mardegan-hr.svg'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import '../css/footer.scss'
//
const Footer = () => (
	<footer id='footer'>
		<div className='hr'>
			<img src={hr} alt='' />
		</div>
		<div className='footer-block'>
			<p className='copy'>Mardegan &copy; 2018</p>
			<div className='social'>
				<a
					href='http://facebook.com/mardeganproductos'
					title='Facebook'
					target='_blank'
					rel='noopener noreferrer'>
					<img src={facebook} alt='Facebook' />
				</a>
				<a
					href='http://instagram.com/productosmardegan'
					title='Instagram'
					target='_blank'
					rel='noopener noreferrer'>
					<img src={instagram} alt='Instagram' />
				</a>
			</div>
		</div>
		<p className='credits'>
			<small>
				<span>
					Desarrollado por{' '}
					<a to='https://github.com/penhold3r' target='_blank' rel='noopener noreferrer'>
						penHolder Designerd
					</a>
				</span>
				<span>&emsp;|&emsp;</span>
				<span>Diseñado por BeWine Agency</span>
			</small>
		</p>
	</footer>
)
//
export default Footer
