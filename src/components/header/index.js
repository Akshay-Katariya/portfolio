import React, { useState } from 'react'
import { Mobile } from './mobile'
import { Web } from './web'
import './header.css'
import { GoogleIcons, Icons } from '../../icons'

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
	const handleMenuClick = () => setIsOpen(!isOpen)

	return (
		<div className='header'>
			<div className='logo'>#Ak</div>
			<div className='menu'>
				<div className='menu-web'>
					<Web />
				</div>
				<div className='menu-mobile'>
					<div onClick={handleMenuClick}>
						<GoogleIcons name={Icons.Menu} />
					</div>
					{isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
				</div>
			</div>
		</div>
	)
}
