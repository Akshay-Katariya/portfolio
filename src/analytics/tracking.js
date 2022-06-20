import ReactGA from 'react-ga'

export const initTracking = () => {
	ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID, {
		debug: true,
		titleCase: false,
		gaOptions: {
			// userId: 123,
		},
	})
}

export const trackEvent = (category, action, label) =>
	ReactGA.event({ category: category || '', action: action || '', label: label || '' })
