import React from 'react'
import { CATEGORY_DEMO_LINK, EVENT_DEMO_VIEWED } from '../../../analytics/events'
import { trackEvent } from '../../../analytics/tracking'
import './links.css'

export const Links = (props) => {
	const { text, title, link, icon } = props

	const trackLink = () => trackEvent(CATEGORY_DEMO_LINK, EVENT_DEMO_VIEWED, title)

	return (
		<div className='project-links'>
			<a href={link} target='_blank' rel='noreferrer' onClick={trackLink}>
				<div className='project-link-button'>
					<i className={icon} />
					{text}
				</div>
			</a>
		</div>
	)
}
