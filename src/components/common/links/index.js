import React from 'react'
import './links.css'
export const Links = (props) => {
	const { text, link, icon } = props
	return (
		<div className='project-links'>
			<a href={link} target='_blank' rel='noreferrer'>
				<div className='project-link-button'>
					<i class={icon} />
					{text}
				</div>
			</a>
		</div>
	)
}
