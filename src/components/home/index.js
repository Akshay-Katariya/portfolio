import React from 'react'
import { useEffect, useState } from 'react'
import { GoogleIcons, Icons } from '../../icons'
import { Body } from '../body'
import { Footer } from '../footer'
import { Header } from '../header'

import './home.css'

export const Home = () => {
	const [showButton, setShowButton] = useState(false)

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.pageYOffset > 300) {
				setShowButton(true)
			} else {
				setShowButton(false)
			}
		})
	}, [])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<div className='home'>
			<div>
				<Header />
			</div>
			<div>
				<Body />
			</div>
			<div>
				<Footer />
			</div>
			{showButton && (
				<div onClick={scrollToTop} className='back-to-top'>
					<GoogleIcons name={Icons.ArrowUp} />
				</div>
			)}
		</div>
	)
}
