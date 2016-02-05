import React, { Component } from 'react'

export default class Post extends Component {
	constructor(props) {
		super(props);
	}

	static get defaultProps()  {
		return {
			title: 'Hello World'
		}
	};

	render () {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<button>Like</button>
			</div>
		);
	}
}
