import React from 'react'
import { Links } from '../../../common/links'
import { Tags } from '../../../common/tags'
import './modal.css'

export const ProjectModal = (props) => {
	const { toggleModal } = props
	const { title, intro, techStack, demoLink, contributions } = props.project
	return (
		<div className='modal-container'>
			<div className='modal-header'>
				<div className='modal-close-corner' onClick={toggleModal}>
					Close
					<i className='fi fi-rr-cross-circle' />
				</div>
			</div>
			<div className='modal-body'>
				<label className='modal-card-title' dangerouslySetInnerHTML={{ __html: title }} />
				<p>{intro}</p>

				<label className='modal-card-label'>Links:</label>
				<Links text='Demo' title={title} link={demoLink} icon='fi fi-rr-laptop' />

				<label className='modal-card-label'>Technologies:</label>
				<Tags list={techStack} />

				<label className='modal-card-label-contri'>Contribution:</label>
				{contributions.map((contribution, index) => {
					return (
						<ul key={index}>
							<li>
								<label dangerouslySetInnerHTML={{ __html: contribution }} />
							</li>
						</ul>
					)
				})}
			</div>
		</div>
	)
}
