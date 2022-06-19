import React from 'react'
import './project-card.css'

export const ProjectCard = (props) => {
	const { title, intro, image, techStack, demoLink, githubLink } = props.data
	return (
		<div className='project-card'>
			<div className='project-info'>
				<label className='project-title'>{title}</label>
				<div className='project-links'>
					{demoLink && (
						<a className='project-link' href={demoLink} target='_blank' rel='noreferrer'>
							<div className='project-link-button'>
								<i className='fi fi-rr-globe' />
								Demo
							</div>
						</a>
					)}
					{githubLink && (
						<a className='project-link' href={githubLink} target='_blank' rel='noreferrer'>
							<div className='project-link-button'>
								<i className='devicon-github-original colored' />
								Github
							</div>
						</a>
					)}
				</div>
				<p>{intro}</p>
				<div className='project-tags'>
					{techStack.map((tag) => (
						<label key={tag} className='project-tag'>
							{tag}
						</label>
					))}
				</div>
			</div>
			<img src={image} alt={title} className='project-photo' />
		</div>
	)
}
