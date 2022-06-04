import React from 'react'
import './about.css'

export const About = () => {
	const picture = require('../../../assets/coding.png')
	return (
		<div className='about'>
			<div className='about-top'>
				<div className='about-info'>
					Hello There 👋, I am
					<br />
					<span className='about-name'>Akshay Katriya.</span>
					<br />I love experimenting with mobile & web technologies
				</div>
				<div className='about-photo'>
					<img src={picture} alt='profile' className='profile-pic' />
				</div>
			</div>
			<div className='about-bottom'>Contact will go here</div>
		</div>
	)
}
