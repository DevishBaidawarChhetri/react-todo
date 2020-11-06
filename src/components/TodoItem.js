import React, { Component } from 'react'

export default class TodoItem extends Component {
	render () {
		const { title, handleEdit, handleDelete } = this.props;
		return (
			<li className="list-group-item d-flex justify-content-between mb-3 rounded">
				<p><strong>{ title }</strong></p>
				<div className="todo-icon">
					<span className="mx-2 text-primary" onClick={ handleEdit }>
						<i className="fas fa-pen"></i>
					</span>
					<span className="mx-2 text-danger" onClick={ handleDelete }>
						<i className="fas fa-trash-alt"></i>
					</span>
				</div>
			</li>
		)
	}
}
