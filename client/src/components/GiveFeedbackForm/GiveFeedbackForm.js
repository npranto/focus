import React, {Component} from 'react';
import {withFormik, Form, Field} from 'formik';
import FaStarO from 'react-icons/lib/fa/star-o';
import FaStar from 'react-icons/lib/fa/star';
import Rating from 'react-rating';
import $ from 'jquery';

import {containLettersOnly} from './../../helpers/utils.js';
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
		const {chosenRating, values, handleChange, handleBlur, touched, errors, isValid, isSubmitting} = this.props;

		return (
			<Form className="give-feedback-form">
				<div className="row">
			        <div className="input-field col s12 m6 l4">
			        	<Field 
			        		name="role" 
			        		id="role" 
			        		type="text" />
						<label htmlFor="role"> Role </label>
						<p className="red-text right-align"><sup> {(touched && touched.role && errors && errors.role) ? errors.role : ''} </sup></p>
			        </div>
			        <div className="input-field col s12 m6 l4">
			        	<Field 
			        		name="organization" 
			        		id="organization" 
			        		type="text" />
						<label htmlFor="organization"> Company / Institution / Organization </label>
						<p className="red-text right-align"><sup> {(touched && touched.organization && errors && errors.organization) ? errors.organization : ''} </sup></p>
			        </div>
		        </div>
		        <div className="row">
		        	<div className="col s12 m12 l4">
				        <div className="input-field">
				        	<p className="organization"> How would you rate your experience with Focus? </p>
				        </div>
				        <div className="feedback-rating">
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
					<div className="input-field col s12 m12 l4">
						<Field 
							name="review" 
							id="review" 
							type="text"
							className="materialize-textarea"
							component="textarea" />
						<label htmlFor="review"> Review </label>
						<p className="red-text right-align"><sup> {(touched && touched.review && errors && errors.review) ? errors.review : ''} </sup></p>
					</div>
				</div>
				<div className="row">
				 	<div className="col s12 m12 l4">
						<p>
							<input 
								name="submitAnonymously" 
								type="checkbox" 
								id="submitAnonymously" 
								checked={values.submitAnonymously}
								onChange={handleChange} />
								<label htmlFor="submitAnonymously"> Submit Anonymously
							</label>
					    </p>
					</div>
		    	</div>
		        <div className="row">
		        	<div className="col s12 m6 l4">
		        		<button type="submit" disabled={isSubmitting || !isValid} className="waves-effect waves-light btn-flat green darken-2 white-text"> Submit </button>
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
	} else if (values.role.length > 150) {
		errors.role = 'Must be less than 150 characters'
	}

	if (values.organization && values.organization.length > 150) {
		errors.organization = 'Must be less than 150 characters'
	}

	if (!values.review) {
		errors.review = 'Required!'
	} else if (values.review.length > 300) {
		errors.review = 'Must be less than 300 characters'
	}

	return errors;
}

const FormikGiveFeedbackForm = withFormik({
	mapPropsToValues(props) {
		return {
			role: '',
			organization: '',
			review: '',
			submitAnonymously: false
		}
	},
	validate,
	handleSubmit(values, {props, resetForm, setSubmitting}) {
		let newReview = {};
		newReview['role'] = values.role;
		newReview['organization'] = values.organization;
		newReview['review'] = values.review;
		newReview['submitAnonymously'] = values.submitAnonymously;
		if (props.chosenRating !== 0) {
			newReview['rating'] = props.chosenRating;
		}
		props.onSubmitFeedback(newReview);
		resetForm();
		props.resetChosenRating();
		setSubmitting(false);
	}
})(GiveFeedbackForm);

export default FormikGiveFeedbackForm;