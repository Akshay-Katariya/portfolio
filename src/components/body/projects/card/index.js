import React, { useState, useEffect } from 'react'
import './project-card.css'
import { Tags } from '../../../common/tags'
import Modal from 'react-modal'
import { ProjectModal } from '../modal'

export const ProjectCard = (props) => {
	const { title, intro, techStack } = props.project

	const [isModalOpen, setModalOpen] = useState(false)

	const handleToggle = () => setModalOpen(!isModalOpen)

	useEffect(() => {
		//Disable background scroll when modal is opened
		const body = document.querySelector('body')
		body.style.overflow = isModalOpen ? 'hidden' : 'auto'
	}, [isModalOpen])

	return (
		<>
			<Modal isOpen={isModalOpen} onRequestClose={handleToggle} className='modal' overlayClassName='overlay'>
				<ProjectModal toggleModal={handleToggle} project={props.project} />
			</Modal>
			<div className='project-card' onClick={handleToggle}>
				<label className='project-card-title'>{title}</label>
				<p className='project-card-intro'>{intro}</p>
				<div className='go-corner' href='#'>
					{/* <div className='go-arrow'>→</div> */}
					<i className='fi fi-rr-arrow-right' />
				</div>
				<Tags list={techStack} />
			</div>
		</>
	)
}
