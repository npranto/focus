import React, { Component } from 'react';

import Review from './Review/Review';
import './Reviews.css';

class Reviews extends Component {

	renderReviews(reviews) {
		return reviews.map((review, index) => {
			return <Review key={index} index={index} review={review} />
		})
	}

	render() {
		const reviews = [
			{
				name: 'Jack Barrows',
				role: 'Chief Executive Officer',
				organization: 'Boston Consulting Firm',
				feedback: 'Everything here works as it should. Just an awesome work environment with awesome people.' 	
			},
			{
				name: 'James White',
				role: 'Software Engineer',
				organization: 'Boston Consulting Firm',
				feedback: 'Everything here works as it should. Just an awesome work environment with awesome people.' 	
			},
			{
				name: 'Kobe Bryant',
				role: 'Business Analyst',
				organization: 'Boston Consulting Firm',
				feedback: 'Everything here works as it should. Just an awesome work environment with awesome people.' 	
			},
			{
				name: 'Donald Trump',
				role: 'Local Business Owner',
				organization: 'Boston Consulting Firm',
				feedback: 'Everything here works as it should. Just an awesome work environment with awesome people.' 	
			},
			{
				name: 'Kevin James',
				role: 'Student',
				organization: 'Boston Consulting Firm',
				feedback: 'Everything here works as it should. Just an awesome work environment with awesome people.' 	
			}
		]

		return (
			<div className="reviews-component">
				<div className="container">
					<h4 className="center-align"> What People Say About Us </h4>
					<br />
					{
						this.renderReviews(reviews)
					}
				</div>
			</div>	
		)
	}
}

export default Reviews;