import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import './App.css'
import { v1 as uuid } from 'uuid'

class App extends Component {
	state = {
		items: [],
		id: uuid(),
		item: '',
		editItem: false
	}
	// Handeling Input
	handleChange = ( e ) => {
		this.setState( {
			item: e.target.value
		} );
		// console.log( e.target.value );
	}
	// Handeling Submit
	handleSubmit = ( e ) => {
		e.preventDefault();
		const newItem = {
			id: this.state.id,
			note: this.state.item
		};

		const updatedItem = [ ...this.state.items, newItem ];

		this.setState( {
			items: updatedItem,
			id: uuid(),
			item: '',
			editItem: false
		} )
	}

	// Handeling Clear list
	clearList = () => {
		this.setState( {
			items: []
		} );
	}
	// Handeling Delete list
	handleDelete = ( id ) => {
		const filteredItems = this.state.items.filter( item => item.id !== id );
		this.setState( {
			items: filteredItems
		} )
	}

	// Handeling Edit list
	handleEdit = ( id ) => {
		const filteredItems = this.state.items.filter( item => item.id !== id );
		const selectedItem = this.state.items.find( item => item.id === id );
		// console.log( selectedItem );
		
		this.setState( {
			items: filteredItems,
			item: selectedItem.note,
			editItem: true
		} );
	}

	render () {
		return (
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto col-md-8 mt-5">
						<TodoInput
							item={ this.state.item }
							handleChange={ this.handleChange }
							handleSubmit={ this.handleSubmit }
							editItem={ this.state.editItem }
						/>
						<TodoList
							items={ this.state.items }
							clearList={ this.clearList }
							handleDelete={ this.handleDelete }
							handleEdit={ this.handleEdit }
						/>
					</div>
				</div>
			</div>
		)
	}
}

export default App;
