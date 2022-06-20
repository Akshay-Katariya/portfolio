import React, { useEffect, useRef } from 'react'
import { Home } from '../src/components/home'
import { initTracking } from './analytics/tracking'

const App = () => {
	const isAnalyticsEnabled = useRef(true)

	useEffect(() => {
		if (isAnalyticsEnabled.current) {
			isAnalyticsEnabled.current = false
			initTracking()
			console.log('Analytics enabled')
		}
	}, [isAnalyticsEnabled])

	return <Home />
}

export default App
