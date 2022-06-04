import PropTypes from 'prop-types'
import React from 'react'

export const Mobile = () => {
	return <div>Mobile Header</div>
}

Mobile.prototype = {
	isOpen: PropTypes.bool,
	setIsOpen: PropTypes.func,
}
