import React from 'react'
import { SocialContact } from '../../common/social-contact'
import './about.css'

export const About = () => {
	const picture = require('../../../assets/images/developer.gif')
	return (
		<div className='about'>
			<div className='about-top'>
				<div className='about-info'>
					Hello There <span className='about-wave'>👋</span>, I am
					<br />
					<span className='about-name'>Akshay Katariya.</span>
					<div className='about-title'>
						<div className='about-title-wrapper'>
							<div className='about-title-item'>Software Engineer 🧑‍💻</div>
							<div className='about-title-item'>Mobile App Developer 📱</div>
							<div className='about-title-item'>Frontend Developer 🖥</div>
							<div className='about-title-item'>Designer 🧑‍🎨</div>
						</div>
					</div>
					<div className='about-intro'>
						A dynamic mobile application developer with a strong <span className='about-exp'>6+ years</span> of
						experience in building and publishing apps to PlayStore and AppStore with comprehensive knowledge of
						platform development, enterprise architecture, agile methodologies, API services, and web-based
						applications.
						<br />
						<br />
						Proficient in Typescript/JavaScript and passionate to write clean, testable, maintainable, and performant
						code.
						<br />
						<br />
						Always open to learn new language and framework, currently experimenting with mobile and web technologies.
						<br />
						<br />
					</div>
				</div>
				<div className='about-photo'>
					<img src={picture} alt='profile' className='profile-pic' />
				</div>
			</div>
			<SocialContact />
		</div>
	)
}
