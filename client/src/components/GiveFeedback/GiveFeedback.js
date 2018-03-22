import React, {Component} from 'react';
import FormikGiveFeedbackForm from './../GiveFeedbackForm/GiveFeedbackForm';
import {connect} from 'react-redux';

import * as actionCreators from './../../actions';
import './GiveFeedback.css';

class GiveFeedback extends Component {

	constructor(props) {
		super(props);

		this.state = {
			chosenRating: 0
		}
	}

	prepareToCreateNewReview(feedback, currentUser) {
		let newReview = {
			...feedback
		};
		if (!newReview.submitAnonymously) {
			newReview['firstName'] = currentUser.firstName;
			newReview['lastName'] = currentUser.lastName;
		}
		delete newReview.submitAnonymously;
		this.props.createNewReview(newReview, currentUser._id);
	}

	render() {
		const {currentUser} = this.props.auth;
		const {scale} = this.props.components.giveFeedback;

		return (
			<div className="give-feedback">
				<h3> Give Feedback </h3>
				<div className="row">
					<p className="col s12 m6 l6 flow-text"> 
						Thank you very much for using Focus! Please give us a quick feedback to better improve our service.
					</p>
				</div>
				<div className="row">
					<div className="col s12 m12 l12">
						<FormikGiveFeedbackForm 
							chosenRating={this.state.chosenRating}
							onRatingSelected={(rate) => this.setState({chosenRating: rate})}
							resetChosenRating={() => this.setState({chosenRating: 0})}
							onSubmitFeedback={(feedback) => this.prepareToCreateNewReview(feedback, currentUser)} />
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth,
		components: state.components
	}
}

export default connect(mapStateToProps, actionCreators)(GiveFeedback);