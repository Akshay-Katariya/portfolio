import React from 'react'
import { Separator } from '../../common/separator'
import { SocialContact } from '../../common/social-contact'
import './contact.css'

export const Contact = () => {
	const resume = require('../../../assets/AkshayKatariyaResume.pdf')
	return (
		<div className='contact'>
			<Separator />
			<label className='contact-section-title'>Contact</label>
			<div className='contact-container'>
				<div className='contact-left'>
					<p>Want to get in touch? Contact me on any of the following platforms</p>
					<SocialContact />
				</div>
				<div className='download'>
					<a download href={resume}>
						<i class='fi fi-rr-cloud-download'></i>
						Download Resume
					</a>
				</div>
			</div>
		</div>
	)
}
