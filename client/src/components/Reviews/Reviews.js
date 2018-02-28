import React, {Component} from 'react';

import './Reviews.css';

class Reviews extends Component {

	renderReviews() {
		return this.props.reviews.map((review, index) => {
			return <p key={index}> {review.feedback} </p>
		})
	}

	render() {
		return (
			<div className="reviews">
				<h3> Reviews </h3>
				{
					this.renderReviews()
				}
			</div>
		)
	}
}

export default Reviews;