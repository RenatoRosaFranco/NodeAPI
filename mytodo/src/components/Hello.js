import React, { Component } from 'react';


class Hello extends Component {

	constructor(props) {
		super(props)
		this.state = {
			counter: 0,
		}
	}

	handleClick = (e) => {
		e.preventDefault()
		this.setState({ name: 'Emanuel' })
		this.setState({ counter: this.state.counter += 1 })
	}

	resetCounter = (e) => {
		e.preventDefault()
		this.setState({ counter: 0 })
	} 	

	render() {
		return(
			<div>
				<h1>{ this.state.name }</h1>
				<h2>Counter { this.state.counter }</h2>
				<button onClick={ this.handleClick }>Click Me</button>
				<button onClick={ this.resetCounter }> Reset </button>
			</div>
		)
	}
}

export default Hello;
