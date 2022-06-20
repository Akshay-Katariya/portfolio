import React, { useState, useEffect } from 'react'
import './project-card.css'
import { Tags } from '../../../common/tags'
import Modal from 'react-modal'
import { ProjectModal } from '../modal'
import { trackEvent } from '../../../../analytics/tracking'
import { CATEGORY_PROJECTS, EVENT_PROJECT_VIEWED } from '../../../../analytics/events'

export const ProjectCard = (props) => {
	const { title, intro, techStack } = props.project

	const [isModalOpen, setModalOpen] = useState(false)

	const handleModalToggle = () => {
		trackEvent(CATEGORY_PROJECTS, EVENT_PROJECT_VIEWED, title.replace(/(<([^>]+)>)/gi, ''))
		setModalOpen(!isModalOpen)
	}

	useEffect(() => {
		Modal.setAppElement('#root')
		//Disable background scroll when modal is opened
		const body = document.querySelector('body')
		body.style.overflow = isModalOpen ? 'hidden' : 'auto'
	}, [isModalOpen])

	return (
		<>
			<Modal isOpen={isModalOpen} onRequestClose={handleModalToggle} className='modal' overlayClassName='overlay'>
				<ProjectModal toggleModal={handleModalToggle} project={props.project} />
			</Modal>
			<div className='project-card' onClick={() => handleModalToggle()}>
				<label className='project-card-title' dangerouslySetInnerHTML={{ __html: title }} />
				<div>
					<p className='project-card-intro'>{intro}</p>
					<div className='go-corner'>
						<i className='fi fi-rr-arrow-right' />
					</div>
					<Tags list={techStack} />
				</div>
			</div>
		</>
	)
}
