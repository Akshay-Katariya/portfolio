import React from 'react'
import { SocialData } from '../../../data/social'
import './social-contact.css'

export const SocialContact = () => {
	return (
		<div className='social-contact'>
			{SocialData.map((item) => {
				return (
					<a key={item.platform} href={item.url}>
						<div className='social-icon-div'>
							<img src={item.image} alt={item.platform} className='social-icon' />
						</div>
					</a>
				)
			})}
		</div>
	)
}
