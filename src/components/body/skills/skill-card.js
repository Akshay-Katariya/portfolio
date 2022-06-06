import React from 'react'
import './skill-card.css'

export const SkillCard = (props) => {
	const { skill } = props
	return (
		<div className='skill-card'>
			<div className='skill-icon'>{skill.icon}</div>
			<label className='skill-name'>{skill.name}</label>
		</div>
	)
}
