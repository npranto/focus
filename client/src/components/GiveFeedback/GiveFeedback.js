import React, {Component} from 'react';
import FormikGiveFeedbackForm from './../GiveFeedbackForm/GiveFeedbackForm';
import {connect} from 'react-redux';

import * as actionCreators from './../../actions';
import './GiveFeedback.css';

class GiveFeedback extends Component {

	updateHoveringOverRating(chosenRate, scale) {
		const scaleUpdated = scale.map(rate => {
			(rate.rate === chosenRate) 
				? rate.hoveringOver = true
				: rate.hoveringOver = false;
			return rate;
		});
		this.props.updateFeedbackScale(scaleUpdated);
	}

	render() {
		const {scale} = this.props.components.giveFeedback;
		const hoveringOverRating = scale.find(rate => {
			return rate.hoveringOver;
		})

		return (
			<div className="give-feedback">
				<h3> Give Feedback </h3>
				<div className="row">
					<p className="col s12 m6 l6 flow-text"> 
						Thank you very much for using Focus! Please give us a quick feedback to better improve our service.
					</p>
				</div>
				<div className="row">
					<div className="col s12 m6 l6">
						<FormikGiveFeedbackForm 
							hoveringOverRating={hoveringOverRating}
							onHoverOverRating={(rate) => this.updateHoveringOverRating(rate, scale)} />
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		components: state.components
	}
}

export default connect(mapStateToProps, actionCreators)(GiveFeedback);