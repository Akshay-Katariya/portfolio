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
						<a className='project-link' href={demoLink}>
							<div className='project-link-button'>
								<i class='fi fi-rr-globe'></i>Demo
							</div>
						</a>
					)}
					{githubLink && (
						<a className='project-link' href={githubLink}>
							<div className='project-link-button'>
								<i class='devicon-github-original colored'></i>
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
