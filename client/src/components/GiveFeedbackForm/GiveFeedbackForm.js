import React, {Component} from 'react';
import {withFormik, Form} from 'formik';
import FaStarO from 'react-icons/lib/fa/star-o';
import FaStar from 'react-icons/lib/fa/star';
import Rating from 'react-rating';
import $ from 'jquery';

import './GiveFeedbackForm.css';

class GiveFeedbackForm extends Component {

	constructor(props) {
		super(props);

		this.state = {
			hoveredOverRate: ''
		};

		$(document).ready(function(){
		    $('.tooltipped').tooltip({delay: 50});
	  	});
	}

	render() {
		const {chosenRating} = this.props;

		return (
			<Form className="give-feedback-form">
				<div className="row">
			        <div className="input-field col s12 m12 l12">
						<input id="role" type="text" />
						<label htmlFor="role"> Role </label>
			        </div>
		        </div>
		        <div className="row">
			        <div className="input-field col s12 m12 l12">
						<input id="organization" type="text" />
						<label htmlFor="organization"> Company / Institution / Organization </label>
			        </div>
		        </div>
		        <div className="row">
			        <div className="input-field col s12 m12 l12">
			        	<p className="organization"> How would you rate your experience with Focus? </p>
			        </div>
			        <div className="col s12 m12 l12 feedback-rating">
		        		<Rating 
							start={0} 
							stop={5} 
							initialRating={chosenRating}
							emptySymbol={
								<FaStarO size={24} />
							}
							fullSymbol={
								<FaStar size={24} />
							} 
							onChange={(rate) => {
								console.log(rate);
								this.props.onRatingSelected(rate);
							}}
						/>
		        	</div>
		        </div>
		        <div className="row">
			        <div className="input-field col s12 m12 l12">
						<input id="organization" type="text" />
						<label htmlFor="organization"> Company / Institution / Organization </label>
			        </div>
		        </div>
		        
			</Form>
		)
	}
}

const validate = (values) => {
	let errors = {};

	if (!values.role) {
		errors.role = 'Required!'
	}

	return errors;
}

const FormikGiveFeedbackForm = withFormik({
	mapPropsToValues(props) {
		return {
			role: '',
			organization: '',
			rating: '',
			review: ''
		}
	},
	validate,
	handleSubmit(values) {
		console.log(values);
	}
})(GiveFeedbackForm);

export default FormikGiveFeedbackForm;