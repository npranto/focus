import React, {Component} from 'react';

import Feature from './../Feature/Feature';
import './Features.css';

class Features extends Component {

	renderFeatures(features) {
		return features.map((feature, index) => {
			return <Feature key={index} index={index} feature={feature} />
		})
	}

	render() {
		const {features} = this.props;

		return (
			<div className="features">
				{
					this.renderFeatures(features)
				}
			</div>
		)
	}
}

export default Features;