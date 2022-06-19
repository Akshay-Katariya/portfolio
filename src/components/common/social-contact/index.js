import React from 'react'
import { SocialData } from '../../../data/social'
import './social-contact.css'

export const SocialContact = () => {
	const resume = require('../../../assets/AkshayKatariyaResume.pdf')
	return (
		<div className='social-contact'>
			<div className='social-contact-container'>
				{SocialData.map((item) => {
					return (
						<a key={item.platform} href={item.url} target='_blank' rel='noreferrer'>
							<div className='social-icon-div'>
								<img src={item.image} alt={item.platform} className='social-icon' />
							</div>
						</a>
					)
				})}
			</div>
			<div className='download'>
				<a download='Akshay-Katariya-Resume.pdf' href={resume}>
					<i className='fi fi-rr-cloud-download' />
					Download Resume
				</a>
			</div>
		</div>
	)
}