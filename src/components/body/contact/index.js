import React from 'react'
import { Separator } from '../../common/separator'
import { SocialContact } from '../../common/social-contact'
import { Email } from '../../email'
import './contact.css'

export const Contact = () => {
	return (
		<div className='contact'>
			<label className='contact-section-title'>Contact</label>
			<Separator />
			<label className='contact-description'>
				Want to get in touch, share new opportunities or want to discuss your idea with me my inbox is always open.
				Whether you have a question or just want to say Hi 👋 I'll try my best to get back to you!
			</label>
			<SocialContact />
			<Email />
		</div>
	)
}
