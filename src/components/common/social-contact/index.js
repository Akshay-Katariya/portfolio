import React from 'react'
import { trackEvent } from '../../../analytics/tracking'
import { SocialData } from '../../../data/social'
import { CATEGORY_SOCIAL, EVENT_RESUME_DOWNLOAD } from '../../../analytics/events'
import './social-contact.css'
import { GoogleIcons, Icons } from '../../../icons'

export const SocialContact = () => {
	const resume = require('../../../assets/Akshay_Katariya_CV.pdf')

	const trackResumeDownload = () => trackEvent(CATEGORY_SOCIAL, EVENT_RESUME_DOWNLOAD)
	const trackSocialLinks = (platformName) => trackEvent(CATEGORY_SOCIAL, platformName)

	return (
		<div className='social-contact'>
			<div className='social-contact-container'>
				{SocialData.map((item) => {
					return (
						<a
							key={item.platform}
							href={item.url}
							target='_blank'
							rel='noreferrer'
							onClick={() => trackSocialLinks(item.platform)}>
							<div className='social-icon-div'>
								<img src={item.image} alt={item.platform} className='social-icon' />
							</div>
						</a>
					)
				})}
			</div>
			<div className='download'>
				<a download='Akshay-Katariya-Resume.pdf' href={resume} onClick={trackResumeDownload}>
					<GoogleIcons name={Icons.Download} margin />
					Download Resume
				</a>
			</div>
		</div>
	)
}
