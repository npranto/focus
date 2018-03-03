import React, {Component} from 'react';
import Media from 'react-media';

import './Feature.css';

class Feature extends Component {

	setOrder(index) {
		return (index%2 === 0) ? 1 : 0;
	}

	render() {
		const {feature, index} = this.props;

		return (
			<div className="feature">
				<Media query="(min-width: 600px)">
		        	{matches =>
		        		matches 
		        			? (
		        				<div className="feature-large-screen">
									<div className="feature-photo" style={{order: this.setOrder(index)}}>
										<img src={feature.photo.src} alt={feature.photo.alt} />
									</div>
									<p className="feature-description flow-text center-align"> {feature.description} </p>
								</div>
		        			)
		        			: (	
		        				<div className="feature-small-screen">
									<div className="feature-photo">
										<img src={feature.photo.src} alt={feature.photo.alt} />
									</div>
									<p className="feature-description flow-text center-align"> {feature.description} </p>
								</div>
		        			)
		        
		        }
		        </Media>
			</div>
		)
	}
}

export default Feature;