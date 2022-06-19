import React from 'react'
import './web.css'

export const Web = () => {
	return (
		<div className='web'>
			<div />
			<div className='web-option'>
				<a href='#skills'>
					<i className='fi fi-rr-laptop option-icon' />
					Skills
				</a>
			</div>
			<div className='web-option'>
				<a href='#projects'>
					<i className='fi fi-rr-edit-alt option-icon' />
					Projects
				</a>
			</div>
			<div className='web-option'>
				<a href='#work'>
					<i className='fi fi-rr-briefcase option-icon' />
					Work
				</a>
			</div>
			<div className='web-option'>
				<a href='#contact'>
					<i className='fi fi-rr-user option-icon' />
					Contact
				</a>
			</div>
		</div>
	)
}
