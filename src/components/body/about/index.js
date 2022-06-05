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
					<span className='about-name'>Akshay Katariya.</span>
					<br />I love experimenting with mobile 📱 & web 🖥 technologies
					<br />
					<br />
					Dynamic mobile application developer with a strong 6 years of experience in building and publishing apps to
					PlayStore and AppStore with comprehensive knowledge of platform development, enterprise architecture, agile
					methodologies, API services, and web-based applications.
					<br />
					Proficient in Typescript/JavaScript and passionate to write clean, testable, maintainable, and performant
					code.
				</div>
				<div className='about-photo'>
					<img src={picture} alt='profile' className='profile-pic' />
				</div>
			</div>
			<SocialContact />
		</div>
	)
}
