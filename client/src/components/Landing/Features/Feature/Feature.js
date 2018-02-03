import React, { Component } from 'react';

import './Feature.css';

class Feature extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="feature-component">
				<p className="feature-description"> {this.props.description} </p>
				<div className="feature-photo-container">
					<img src={this.props.photo} alt={this.props.alternateText} />
				</div>
			</div>
		)
	}
}

export default Feature;