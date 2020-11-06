import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
	render () {
		const { items, clearList, handleEdit, handleDelete } = this.props;
		return (
			<ul className="list-group my-5">
				<h3 className="text-capitalize text-center mb-5">Your Lists</h3>
				{
					items.map( ( item ) => {
						return (
							<TodoItem
								key={ item.id }
								title={ item.note }
								handleEdit={ () => handleEdit( item.id ) }
								handleDelete={ () => handleDelete( item.id ) }
							/>
						)
					} )
				}
				<button
					type="button"
					className="btn btn-danger btn-block text-uppercase mt-5"
					onClick={ clearList }
				>
					Clear List &nbsp;
						<i className="fas fa-times"></i>
				</button>
			</ul>
		)
	}
}
