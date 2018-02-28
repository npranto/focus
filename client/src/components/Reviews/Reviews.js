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
			<div className="reviews">
				{
					this.renderReviews(reviews)
				}
			</div>
		)
	}
}

export default Reviews;