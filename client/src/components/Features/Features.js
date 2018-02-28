import React, {Component} from 'react';

import './Features.css';

class Features extends Component {

	renderFeatures() {
		return this.props.features.map((feature, index) => {
			return <p key={index}> {feature.description} </p>
		})
	}

	render() {
		return (
			<div className="features">
				<h3> Features </h3>
				{
					this.renderFeatures()
				}
			</div>
		)
	}
}

export default Features;