import React, {Component} from 'react';
import {withFormik, Form} from 'formik';
import FaStarO from 'react-icons/lib/fa/star-o';
import FaStar from 'react-icons/lib/fa/star';
import Rating from 'react-rating';

import './GiveFeedbackForm.css';

class GiveFeedbackForm extends Component {
	render() {
		return (
			<Form className="give-feedback-form">
				<div class="row">
			        <div class="input-field col s12 m12 l12">
						<input placeholder="Front End Developer" id="role" type="text" className="validate" />
						<label htmlFor="role"> Role </label>
			        </div>
		        </div>
		        <div class="row">
			        <div class="input-field col s12 m12 l12">
						<input placeholder="Microsoft" id="organization" type="text" className="validate" />
						<label htmlFor="organization"> Company / Institution / Organization </label>
			        </div>
		        </div>
		        <div class="row">
			        <div class="input-field col s12 m12 l12">
			        	<label htmlFor="organization"> Company / Institution / Organization </label>
			        	<div>
			        		<Rating 
								start={0} 
								stop={5} 
								initialRating={0} // rating given by reviewer 
								emptySymbol={
									<FaStarO size={24}/>
								}
								fullSymbol={
									<FaStar size={24}/>
								} 
							/>
			        	</div>
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