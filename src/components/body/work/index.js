import React from 'react'
import { WorkData } from '../../../data/work'
import { Separator } from '../../common/separator'
import { WorkCard } from './work-card'
import './work.css'

export const Work = () => {
	return (
		<div className='work'>
			<label className='work-section-label'>Work</label>
			<Separator />
			<div className='work-list'>
				{WorkData.map((work) => (
					<WorkCard work={work} />
				))}
			</div>
		</div>
	)
}
