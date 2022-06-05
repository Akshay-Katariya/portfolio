import React from 'react'
import { ProjectData } from '../../../data/project'
import { ProjectCard } from './project-card'
import { Separator } from '../../common/separator'
import './projects.css'

export const Projects = () => {
	return (
		<div className='projects'>
			<label className='project-section-title'>Projects</label>
			<Separator />
			<div>
				{ProjectData.map((project) => (
					<ProjectCard key={project.id} data={project} />
				))}
			</div>
		</div>
	)
}
