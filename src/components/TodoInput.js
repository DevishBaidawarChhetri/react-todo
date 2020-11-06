import React, { Component } from 'react'

export default class TodoInput extends Component {
	render () {
		const { item, handleChange, handleSubmit, editItem } = this.props;
		return (
			<div className="card card-body my-3">
				<h3 className="text-center text-capitalize text-dark mb-4">Todo Input</h3>
				<form onSubmit={ handleSubmit }>
					<div className="input-group">
						<div className="input-group-prepend">
							<div className="input-group-text bg-primary text-white">
								<i className="fas fa-book"></i>
							</div>
						</div>
						<input
							type="text"
							className="form-control"
							placeholder="Add Todo List"
							value={ item }
							onChange={ handleChange }
						/>
					</div>
					<button
						type="submit"
						disabled={ item ? false : true }
						className={
							editItem
								? "btn btn-success mt-3 text-uppercase w-100"
								: "btn btn-primary mt-3 text-uppercase w-100"
						}
					>
						{ editItem ? 'Edit Item' : 'Add Item' }
							&nbsp;<i className="fas fa-arrow-right"></i>
					</button>
				</form>
			</div>
		)
	}
}