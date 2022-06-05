import React from 'react'
import { SocialContact } from '../../common/social-contact'
import './about.css'

export const About = () => {
	const picture = require('../../../assets/images/coding.png')
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
			<SocialContact />
		</div>
	)
}
