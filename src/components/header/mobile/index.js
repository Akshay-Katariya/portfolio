import React, { useEffect } from 'react'
import { GoogleIcons, Icons } from '../../../icons'
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
				<GoogleIcons name={Icons.Close} margin />
			</div>
			<div className='mobile-options'>
				<div className='mobile-option'>
					<a href='#skills' onClick={handleCloseClick}>
						<GoogleIcons name={Icons.Skills} margin />
						Skills
					</a>
				</div>
				<div className='mobile-option'>
					<a href='#projects' onClick={handleCloseClick}>
						<GoogleIcons name={Icons.Project} margin />
						Projects
					</a>
				</div>
				<div className='mobile-option'>
					<a href='#work' onClick={handleCloseClick}>
						<GoogleIcons name={Icons.Work} margin />
						Work
					</a>
				</div>
				<div className='mobile-option'>
					<a href='#contact' onClick={handleCloseClick}>
						<GoogleIcons name={Icons.Contact} margin />
						Contact
					</a>
				</div>
			</div>
		</div>
	)
}
