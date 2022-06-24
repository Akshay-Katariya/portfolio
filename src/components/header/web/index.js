import React from 'react'
import { GoogleIcons, Icons } from '../../../icons'
import './web.css'

export const Web = () => {
	return (
		<div className='web'>
			<div />
			<div className='web-option'>
				<a href='#skills'>
					<GoogleIcons name={Icons.Skills} margin />
					Skills
				</a>
			</div>
			<div className='web-option'>
				<a href='#projects'>
					<GoogleIcons name={Icons.Project} margin />
					Projects
				</a>
			</div>
			<div className='web-option'>
				<a href='#work'>
					<GoogleIcons name={Icons.Work} margin />
					Work
				</a>
			</div>
			<div className='web-option'>
				<a href='#contact'>
					<GoogleIcons name={Icons.Contact} margin />
					Contact
				</a>
			</div>
		</div>
	)
}
