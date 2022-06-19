import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import './mobile.css'

export const Mobile = (props) => {
	const { isOpen, setIsOpen } = props
	const handleCloseClick = () => setIsOpen(!isOpen)

	useEffect(() => {
		//Disable background scroll when sidebar is opened
		const body = document.querySelector('body')
		body.style.overflow = 'hidden'
		return () => (body.style.overflow = 'auto')
	}, [])

	return (
		<div className='mobile'>
			<div className='close-icon' onClick={handleCloseClick}>
				<i class='fi fi-rr-cross-circle'></i>
			</div>
			<div className='mobile-options'>
				<div className='mobile-option'>
					<a href='#skills' onClick={handleCloseClick}>
						<i class='fi fi-rr-laptop option-icon'></i>Skills
					</a>
				</div>
				<div className='mobile-option'>
					<a href='#projects' onClick={handleCloseClick}>
						<i class='fi fi-rr-edit-alt option-icon'></i>Projects
					</a>
				</div>
				<div className='mobile-option'>
					<a href='#work' onClick={handleCloseClick}>
						<i class='fi fi-rr-briefcase option-icon'></i>Work
					</a>
				</div>
				<div className='mobile-option'>
					<a href='#contact' onClick={handleCloseClick}>
						<i class='fi fi-rr-user option-icon'></i>Contact
					</a>
				</div>
			</div>
		</div>
	)
}

Mobile.prototype = {
	isOpen: PropTypes.bool,
	setIsOpen: PropTypes.func,
}
