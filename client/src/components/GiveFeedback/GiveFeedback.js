import React, {Component} from 'react';
import FormikGiveFeedbackForm from './../GiveFeedbackForm/GiveFeedbackForm';

import './GiveFeedback.css';

class GiveFeedback extends Component {
	render() {
		return (
			<div className="give-feedback">
				<h3> Settings </h3>
				<div className="row">
					<p className="col s12 m6 l6 flow-text"> 
						Thank you very much for using Focus! Please give us a quick feedback to better improve our service.
					</p>
				</div>
				<div className="row">
					<div className="col s12 m6 l6">
						<FormikGiveFeedbackForm />
					</div>
				</div>
			</div>
		)
	}
}

export default GiveFeedback;