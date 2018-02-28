import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actionCreators from './../../actions';
import Jumbotron from './../Jumbotron/Jumbotron';
import Features from './../Features/Features';
import Reviews from './../Reviews/Reviews';
import './Landing.css';

class Landing extends Component {

	componentDidMount() {
		this.props.fetchTopFiveHighlyRatedReviews();
	}

	render() {
		const {landing} = this.props.components;

		return (
			<div className="landing">
				<section className="jumbotron-container">
					<Jumbotron />
				</section>
				{/*<section className="features-container">
					<Features features={landing.features}/>
				</section>
				<section className="reviews-container">
					<Reviews reviews={landing.reviews}/>
				</section>*/}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		components: state.components
	}
}

export default connect(mapStateToProps, actionCreators)(Landing);