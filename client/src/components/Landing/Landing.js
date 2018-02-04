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
				<Features />
				<Reviews />
			</div>	
		)
	}
}

export default Landing;