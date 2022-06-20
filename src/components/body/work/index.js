import React, { useState } from 'react'
import { CATEGORY_COMPANY, EVENT_COMPANY_VIEWED } from '../../../analytics/events'
import { trackEvent } from '../../../analytics/tracking'
import { WorkData } from '../../../data/work'
import { Separator } from '../../common/separator'
import { WorkAchievement } from './work-achievement'
import './work.css'

export const Work = () => {
	const [data, setData] = useState(WorkData[0])

	const handleWorkClick = (company) => {
		setData(company)
		trackEvent(CATEGORY_COMPANY, EVENT_COMPANY_VIEWED, company.companyName)
	}

	return (
		<div className='work'>
			<label className='work-section-label'>Work</label>
			<Separator />

			<div className='work-container'>
				<div className='work-company-container'>
					{WorkData.map((company, index) => {
						return (
							<div key={index} className='work-company-button'>
								<div className='work-cta' onClick={() => handleWorkClick(company)}>
									<span>{company.companyName}</span>
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
