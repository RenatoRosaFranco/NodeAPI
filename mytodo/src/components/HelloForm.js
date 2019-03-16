import React, { Component } from 'react';

class HelloForm extends Component {
	
	constructor(props){
		super(props)
		this.state = {
			name: 'Renato'
		}
	}

	sayHello = (e) => {
		e.preventDefault()
		this.setState({ name: e.target.value })
		console.log(e.target.value)
	}

	render() {
		return(
			<div>
				<br/>
				<label>Name: </label>
				<input type='text' name='name' onChange={ this.sayHello } />
				<div className='well'>{ this.state.name }</div>
			</div>
		)
	}
}

export default HelloForm;