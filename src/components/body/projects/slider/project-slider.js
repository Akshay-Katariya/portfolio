import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './project-slider.css'
import { ProjectData } from '../../../../data/project'
import { ProjectCard } from '../card'
import { SliderSettings } from '../../../../data/slider'

export const ProjectSlider = () => {
	const renderSlides = () => ProjectData.map((project) => <ProjectCard key={project.id} project={project} />)

	return (
		<div className='project-slider-container'>
			<Slider {...SliderSettings}>{renderSlides()}</Slider>
		</div>
	)
}
