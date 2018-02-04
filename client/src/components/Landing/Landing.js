import React, { Component } from 'react';

import Jumbotron from './Jumbotron/Jumbotron';
import Features from './Features/Features';
import Reviews from './Reviews/Reviews';
import './Landing.css';

class Landing extends Component {
	render() {
		return (
			<div className="landing-component">
				<Jumbotron />
				{/*<div className="white">
					<Features />
				</div>
				<div className="grey lighten-3">
					<Reviews />
				</div>*/}
				<Features />
				<Reviews />
			</div>	
		)
	}
}

export default Landing;