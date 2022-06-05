import React from 'react'
import './work-card.css'

export const WorkCard = (props) => {
	const { company, startDate, endDate, achievement, logo } = props.work
	return (
		<div className='work-card'>
			<div className='work-info'>
				<label className='work-company-name'>{company}</label>
				<div className='work-dates'>
					<label>
						{startDate} - {endDate}
					</label>
				</div>
				<div className='work-achievement'>
					{achievement.map((item, index) => (
						<div key={index} className='work-achievement'>
							<ul>
								<li>
									<div dangerouslySetInnerHTML={{ __html: item }} />
								</li>
							</ul>
						</div>
					))}
				</div>
			</div>
			<div className='work-logo-container'>
				<img className='work-logo' src={logo} alt={company} />
			</div>
		</div>
	)
}
