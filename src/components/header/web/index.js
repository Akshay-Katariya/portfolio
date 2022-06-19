import React from 'react'
import './web.css'

export const Web = () => {
	return (
		<div className='web'>
			<div />
			<div className='web-option'>
				<a href='#skills'>
					<i className='fi fi-rr-laptop option-icon'></i>Skills
				</a>
			</div>
			<div className='web-option'>
				<a href='#projects'>
					<i className='fi fi-rr-edit-alt option-icon'></i>Projects
				</a>
			</div>
			<div className='web-option'>
				<a href='#work'>
					<i className='fi fi-rr-briefcase option-icon'></i>Work
				</a>
			</div>
			<div className='web-option'>
				<a href='#contact'>
					<i className='fi fi-rr-user option-icon'></i>Contact
				</a>
			</div>
		</div>
	)
}
