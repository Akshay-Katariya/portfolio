import React, { useState } from 'react'
import { WorkData } from '../../../data/work'
import { Separator } from '../../common/separator'
import { WorkAchievement } from './work-achievement'
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
				<WorkAchievement data={data} />
			</div>
		</div>
	)
}
