import React, { useState } from 'react'
import { WorkData } from '../../../data/work'
import { Separator } from '../../common/separator'
import './work.css'

export const Work = () => {
	const [data, setData] = useState(WorkData[0])

	return (
		<div className='work'>
			<label className='work-section-label'>Work</label>
			<Separator />

			<div className='work-container'>
				<div className='work-company-container'>
					{WorkData.map((work, index) => {
						return (
							<div key={index} className='work-company-button'>
								<div className='work-cta' onClick={() => setData(work)}>
									<span>{work.company}</span>
								</div>
							</div>
						)
					})}
				</div>
				<div className='work-achievements'>
					{
						<div className='work-details'>
							<label className='work-company-info'>
								{data.designation} <label className='company-name'>@{data.company}</label>
							</label>
							<label className='work-info-date'>
								{data.startDate} - {data.endDate}
							</label>
							<br />
							{data.achievement.map((achievements, index) => {
								return (
									<ul key={index}>
										<li>
											<label dangerouslySetInnerHTML={{ __html: achievements }} />
										</li>
									</ul>
								)
							})}
						</div>
					}
				</div>
			</div>
		</div>
	)
}
