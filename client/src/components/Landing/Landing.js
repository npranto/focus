import React, { Component } from 'react';

import Jumbotron from './Jumbotron/Jumbotron';
import Features from './Features/Features';
import './Landing.css';

class Landing extends Component {
	render() {
		return (
			<div className="landing-component">
				<Jumbotron />
				<Features />
			</div>	
		)
	}
}

export default Landing;