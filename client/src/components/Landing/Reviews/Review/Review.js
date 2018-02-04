import React, { Component } from 'react';

import './Review.css';

class Review extends Component {

	render() {
		return (
			<div className="review-component">
				<ul className="collection">
				    <li className="collection-item avatar">
						<img src="https://avatars2.githubusercontent.com/u/13524077?v=4" alt="" className="circle" />
						<span className="title"> {this.props.review.name} </span>
						<p>
							{this.props.review.role}
							<br />
						 	{this.props.review.organization}
						</p>
						<blockquote className="feedback"> {this.props.review.feedback} </blockquote>
				    </li>
				</ul>
			</div>	
		)
	}
}

export default Review;