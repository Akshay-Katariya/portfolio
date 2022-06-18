import React from 'react'
import './project-card.css'
import { Tags } from '../../../common/tags'
export const ProjectCard = (props) => {
	const { title, intro, techStack, demoLink } = props.project
	return (
<<<<<<< HEAD
		<>
=======
		<div className='project-card-container'>
>>>>>>> a7ac5242c08e65f2d36813714817afc628c328df
			<a class='project-card' href={demoLink} target='_blank' rel='noreferrer'>
				<label className='project-card-title'>{title}</label>
				<p class='project-card-intro'>{intro}</p>
				<div class='go-corner' href='#'>
					<div class='go-arrow'>→</div>
				</div>
				<Tags list={techStack} />
			</a>
<<<<<<< HEAD
		</>
=======
		</div>
>>>>>>> a7ac5242c08e65f2d36813714817afc628c328df
	)
}
