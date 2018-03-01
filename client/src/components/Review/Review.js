import React, {Component} from 'react';
import Rating from 'react-rating';
import FaStarO from 'react-icons/lib/fa/star-o';
import FaStar from 'react-icons/lib/fa/star';
import Media from 'react-media';

import ProfilePicturePlaceholderPortrait from './../../assets/profile-picture-placeholder-portrait.jpg';
import './Review.css';

class Review extends Component {

	setJustifyContent(index) {
		return (index%2 === 0) ? 'flex-start' : 'flex-end';
	}

	renderReview(screenClass) {
		return (
			<li className={`collection-item avatar ${screenClass}`}>
				<img src={ProfilePicturePlaceholderPortrait} alt="Reviewer Avatar" className="circle" />
				<span className="title"> John White </span>
				<div className="reviewer-info">
					<p className="reviewer-role-organization">
						CEO, Google
					</p>
					<p className="reviewer-rating">
						<Rating 
							start={0} 
							stop={5} 
							initialRating={4} 
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
						For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.
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
		          				this.renderReview('large-screen')
		          			)
		          			: (
		          				this.renderReview('small-screen')
		          			)
		          		}
		          	</Media>
				</ul>
			</div>
		)
	}
}

export default Review;