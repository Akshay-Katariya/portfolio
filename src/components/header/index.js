import React, { useState } from 'react'
import { Mobile } from './mobile'
import { Web } from './web'

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
	const handleMenuClick = () => setIsOpen(!isOpen)

	return (
		<div className='header'>
			<div className='logo'>Akshay</div>
			<div className='menu'>
				<div className='menu-web'>
					<Web />
				</div>
				<div className='menu-mobile'>
					<div onClick={handleMenuClick}>
						<i class='fi fi-rr-apps'></i>
					</div>
					{isOpen && <Mobile />}
				</div>
			</div>
		</div>
	)
}
