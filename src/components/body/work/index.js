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

			<div className='div-main'>
				<div className='work-div'>
					{WorkData.map((work) => {
						return (
							<div className='item-left'>
								<div className='cta' onClick={() => setData(work)}>
									<span>{work.company}</span>
								</div>
							</div>
						)
					})}
				</div>
				<div className='right'>
					{
						<div className='div-details'>
							<label className='info'>
								{data.designation} @ {data.company}
							</label>
							<label className='info-date'>
								{data.startDate} - {data.endDate}
							</label>
							<br />
							{data.achievement.map((a) => {
								return (
									<ul>
										<li>
											<label dangerouslySetInnerHTML={{ __html: a }} />
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
