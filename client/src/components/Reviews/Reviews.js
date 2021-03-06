import React, {Component} from 'react';

import Review from './../Review/Review';
import './Reviews.css';

class Reviews extends Component {

	renderReviews(reviews) {
		return reviews.map((review, index) => {
			return <Review key={index} index={index} review={review} />
		})
	}

	render() {
		const {reviews} = this.props;

		return (
			<div className="reviews grey lighten-4">
				<h3 className="header center-align"> What Others Says About Us </h3>
				{
					this.renderReviews(reviews)
				}
			</div>
		)
	}
}

export default Reviews;