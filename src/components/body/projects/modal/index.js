import React from 'react'
import { GoogleIcons, Icons } from '../../../../icons'
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
					<label>Close</label>
					<GoogleIcons name={Icons.Close} />
				</div>
			</div>
			<div className='modal-body'>
				<label className='modal-card-title' dangerouslySetInnerHTML={{ __html: title }} />
				<p>{intro}</p>

				{demoLink && <label className='modal-card-label'>Link:</label>}
				{demoLink && <Links text='Demo' title={title} link={demoLink} icon={Icons.Project} />}

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
