import React, { Component } from 'react';

import Jumbotron from './Jumbotron/Jumbotron';
import './Landing.css';

class Landing extends Component {
	render() {
		return (
			<div className="landing-component">
				<Jumbotron />
			</div>	
		)
	}
}

export default Landing;