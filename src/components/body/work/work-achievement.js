import React from 'react'
import './work-achievement.css'

export const WorkAchievement = (props) => {
	const { designation, company, startDate, endDate, achievement } = props.data
	return (
		<div className='work-details'>
			<label className='work-company-info'>
				{designation} <label className='work-company-name'>@{company}</label>
			</label>
			<label className='work-info-date'>
				{startDate} - {endDate}
			</label>
			<br />
			{achievement.map((achievements, index) => {
				return (
					<ul key={index}>
						<li>
							<label dangerouslySetInnerHTML={{ __html: achievements }} />
						</li>
					</ul>
				)
			})}
		</div>
	)
}
