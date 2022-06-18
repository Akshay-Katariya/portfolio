import React from 'react'
import './tags.css'

export const Tags = (props) => {
	const { list } = props
	return (
		<div className='tags'>
			{list.map((tag) => (
				<label key={tag} className='tag'>
					{tag}
				</label>
			))}
		</div>
	)
}
