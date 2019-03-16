import React, { Component } from 'react';

class MailForm extends Component {
	constructor(props){
		super(props)
		this.state = {
			name: null,
			phone: null,
			email: null,
			message: null
		}
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.setState({name: this.refs.name.value})
		this.setState({phone: this.refs.phone.value})
		this.setState({email: this.refs.email.value})
		this.setState({message: this.refs.message.value})

		console.log("E-mail informations: ")
		console.log(this.refs.name.value)
		console.log(this.refs.phone.value)
		console.log(this.refs.email.value)
		console.log(this.refs.message.value)
	}

	render(){
		return(
			<div>
			 <form id="mailForm" onSubmit={ this.handleSubmit }>
				<div className='field'>
					<label>Nome: </label><br/>
					<input name='name' ref='name' type='text' required/>
				</div>
				<div className='field'>
					<label>Telefone: </label><br/>
					<input name='phone' ref='phone' type='text' required/>
				</div>
				<div className='field'>
					<label>E-mail: </label><br/>
					<input name='email' ref='email' type='email' required/>
				</div>
				<div className='field'>
					<label>Mensagem: </label><br/>
					<textarea name='message' ref='message' required/>
				</div>
				<div className='field'><br/>
					<input type='submit'/>
				</div>
				</form>
			</div>
		)
	}
}

export default MailForm;