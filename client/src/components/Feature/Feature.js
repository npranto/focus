import React, {Component} from 'react';

import './Feature.css';

class Feature extends Component {

	setOrder(index) {
		return (index%2 === 0) ? 1 : 0;
	}

	render() {
		const {feature, index} = this.props;

		return (
			<div className="feature">
				<div className="feature-photo" style={{order: this.setOrder(index)}}>
					<img src={feature.photo.src} alt={feature.photo.alt} />
				</div>
				<p className="feature-description flow-text center-align"> {feature.description} </p>
			</div>
		)
	}
}

export default Feature;