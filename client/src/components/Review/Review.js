import React, {Component} from 'react';
import Rating from 'react-rating';
import FaStarO from 'react-icons/lib/fa/star-o';
import FaStar from 'react-icons/lib/fa/star';
import Media from 'react-media';

import UserIcon from './../../assets/user-icon.png';
import './Review.css';

class Review extends Component {

	setJustifyContent(index) {
		return (index%2 === 0) ? 'flex-start' : 'flex-end';
	}

	renderReview(screenClass, review) {
		return (
			<li className={`collection-item avatar grey lighten-4 ${screenClass}`}>
				<img src={review.photo ? review.photo : UserIcon} alt="Reviewer Avatar" className="circle" />
				<span className="title"> {review.firstName} {review.lastName} </span>
				<div className="reviewer-info">
					<p className="reviewer-role-organization">
						{review.role}, {review.organization}
					</p>
					<p className="reviewer-rating">
						<Rating 
							start={1} 
							stop={5} 
							initialRating={4} // rating given by reviewer
							readonly 
							emptySymbol={
								<FaStarO size={24}/>
							}
							fullSymbol={
								<FaStar size={24}/>
							} 
						/>
					</p>
					<blockquote className="reviewer-feedback">
						{review.review}
					</blockquote>
					
				</div>
		    </li>
		)
	}

	render() {
		const {review, index} = this.props;

		return (
			<div className="review">
				<ul className="collection" style={{justifyContent: this.setJustifyContent(index)}}>
				    <Media query="(min-width: 800px)">
		          		{matches =>
		          			matches 
		          			? (
		          				this.renderReview('review-large-screen', review)
		          			)
		          			: (
		          				this.renderReview('review-small-screen', review)
		          			)
		          		}
		          	</Media>
				</ul>
			</div>
		)
	}
}

export default Review;