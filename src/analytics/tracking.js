import ReactGA from 'react-ga4'

export const initTracking = () => {
	ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID, {
		// debug: true,
		titleCase: false,
		gaOptions: {
			// userId: 123,
		},
	})
}

export const trackEvent = (category, action) => ReactGA.event({ category: category || '', action: action || '' })
