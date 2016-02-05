import React, { Component } from 'react'

export default class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
			liked: false
		}
	}

	static get defaultProps()  {
		return {
			title: 'Hello World'
		}
	};

	toggleLike () {
		this.setState({
			liked: !this.state.liked
		})	
	}

	render () {
		let buttonText = this.state.liked ? 'Unlike' : 'Like'
		return (
			<div>
				<h1>{this.props.title}</h1>
				<button onClick={this.toggleLike.bind(this)}>{buttonText}</button>
			</div>
		);
	}
}
