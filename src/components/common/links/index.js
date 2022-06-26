import React from 'react'
import { CATEGORY_DEMO_LINK, EVENT_DEMO_VIEWED } from '../../../analytics/events'
import { trackEvent } from '../../../analytics/tracking'
import { GoogleIcons } from '../../../icons'
import './links.css'

export const Links = (props) => {
	const { text, title, link, icon } = props

	const trackLink = () => {
		trackEvent(CATEGORY_DEMO_LINK, EVENT_DEMO_VIEWED + ' ' + title.split(':')[0])
		console.log('Demo==>', title.split(':')[0])
	}

	return (
		<div className='project-links'>
			<a href={link} target='_blank' rel='noreferrer' onClick={trackLink}>
				<div className='project-link-button'>
					<GoogleIcons name={icon} margin />
					{text}
				</div>
			</a>
		</div>
	)
}
