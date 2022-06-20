import React, { useEffect, useRef } from 'react'
import { Home } from '../src/components/home'
import { initTracking } from './analytics/tracking'

const App = () => {
	const isAnalyticsEnabled = useRef(true)

	useEffect(() => {
		if (isAnalyticsEnabled.current) {
			isAnalyticsEnabled.current = false
			initTracking()
			console.log('Analytics enabled', process.env.REACT_APP_GA_TRACKING_ID)
		}
	}, [isAnalyticsEnabled])

	return <Home />
}

export default App
