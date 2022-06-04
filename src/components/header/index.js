import React from 'react'
import { Mobile } from './mobile'
import { Web } from './web'

export const Header = () => {
	return (
		<div className='header'>
			<div className='logo'>Akshay</div>
			<div className='menu'>
				<div className='menu-web'>
					<Web />
				</div>
				<div className='menu-mobile'>
					<Mobile />
				</div>
			</div>
		</div>
	)
}
