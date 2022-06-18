import React from 'react'
import './project-card.css'
import { Tags } from '../../../common/tags'
export const ProjectCard = (props) => {
	const { title, intro, techStack, demoLink } = props.project
	return (
		<>
			<a class='project-card' href={demoLink} target='_blank' rel='noreferrer'>
				<label className='project-card-title'>{title}</label>
				<p class='project-card-intro'>{intro}</p>
				<div class='go-corner' href='#'>
					<div class='go-arrow'>→</div>
				</div>
				<Tags list={techStack} />
			</a>
		</>
	)
}
