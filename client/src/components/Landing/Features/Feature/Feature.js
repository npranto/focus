import React, { Component } from 'react';

import './Feature.css';

class Feature extends Component {

	constructor(props) {
		super(props);
	}

	renderFeatureByIndex(index, feature) {
		return ((index % 2) === 0) 
			? (
				<div className="feature-container">
					<p className="feature-description"> {feature.description} </p>
					<div className="feature-photo-container">
						<img src={feature.photo.src} alt={feature.photo.alt} />
					</div>
				</div>
			) 
			: (
				<div className="feature-container">
					<div className="feature-photo-container">
						<img src={feature.photo.src} alt={feature.photo.alt} />
					</div>
					<p className="feature-description"> {feature.description} </p>
				</div>
			)
	}

	render() {
		return (
			<div className="feature-component">
				{
					this.renderFeatureByIndex(this.props.index, this.props.feature)
				}
			</div>
		)
	}
}

export default Feature;