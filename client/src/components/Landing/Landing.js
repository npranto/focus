import React, {Component} from 'react';

import Jumbotron from './../Jumbotron/Jumbotron';
import Features from './../Features/Features';
import Reviews from './../Reviews/Reviews';
import './Landing.css';

class Landing extends Component {
	render() {
		return (
			<div className="landing">
				<section className="jumbotron-container">
					<Jumbotron />
				</section>
				<section className="features-container">
					<Features />
				</section>
				<section className="reviews-container">
					<Reviews />
				</section>
			</div>
		)
	}
}

export default Landing;