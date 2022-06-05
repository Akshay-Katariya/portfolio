import React from 'react'
import { Separator } from '../../common/separator'
import { SkillsData } from '../../../data/skill'
import { SkillCard } from './skill-card'
import './skills.css'

export const Skills = () => {
	return (
		<div className='skills'>
			<label className='skills-section-title'>Skills</label>
			<Separator />
			<div className='skills-container'>
				{SkillsData.map((item) => (
					<div key={item.type} id={item.type} className='skills-section'>
						<label className='skills-title'>{item.type}</label>
						<div className='skills-list'>
							{item.list.map((skill) => {
								return <SkillCard key={skill.name} id={skill.name} skill={skill} />
							})}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
