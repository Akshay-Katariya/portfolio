import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './project-slider.css'
import { ProjectData } from '../../../../data/project'
import { ProjectCard } from '../card'
import { SliderSettings } from '../../../../data/slider'

export const ProjectSlider = () => {
	const renderSlides = () => ProjectData.map((project) => <ProjectCard project={project} />)

	return (
		<div className='project-slider-container'>
			<Slider {...SliderSettings}>{renderSlides()}</Slider>
			{/* <div className='project-info'>
				<label className='project-title'>{title}</label>
				<div className='project-links'>
					{demoLink && (
						<a className='project-link' href={demoLink} target='_blank' rel='noreferrer'>
							<div className='project-link-button'>
								<i class='fi fi-rr-globe'></i>Demo
							</div>
						</a>
					)}
					{githubLink && (
						<a className='project-link' href={githubLink} target='_blank' rel='noreferrer'>
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
			<img src={image} alt={title} className='project-photo' /> */}
		</div>
	)
}
