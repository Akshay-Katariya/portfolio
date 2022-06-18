import React from 'react'
import { ProjectSlider } from './slider/project-slider'
import { Separator } from '../../common/separator'
import './projects.css'

export const Projects = () => {
	return (
		<div className='projects'>
			<label className='project-section-title'>Projects</label>
			<Separator />
			<ProjectSlider />
		</div>
	)
}
