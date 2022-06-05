import React from 'react'
import { Separator } from '../../common/separator'
import { SocialContact } from '../../common/social-contact'
import './contact.css'

export const Contact = () => {
	return (
		<div className='contact'>
			<label className='contact-section-title'>Contact</label>
			<Separator />
			<div className='contact-container'>
				<div className='contact-left'>
					<p>Want to get in touch? Contact me on any of the following platforms</p>
					<SocialContact />
				</div>
			</div>
		</div>
	)
}
