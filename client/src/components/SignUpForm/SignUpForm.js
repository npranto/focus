import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';

import SignUpFormInputField from './../SignUpFormInputField/SignUpFormInputField';
import {containLettersOnly} from './../../helpers/utils.js';
import './SignUpForm.css';

class SignUpForm extends Component {

	onSignUpFormSubmit(form) {
		console.log(form);
	}

	renderInputFields(inputFields) {
		return inputFields.map((inputField, index) => {
			const {name, placeholder, id, type, htmlFor, label} = inputField;
			return <Field
			            key={index}
						name={name}
						placeholder={placeholder}
						id={id}
						type={type}
						htmlFor={htmlFor}
						label={label}
						inputContainerSize={name==='email' ? 'm12 l12' : 'm6 l6'}
						className="validate"
						component={SignUpFormInputField} />
		})
	}

	render() {
		const {handleSubmit, invalid, pristine, submitting } = this.props;
		const {inputFields} = this.props.components.signUpForm;

		return (
			<div className="sign-up-form">
				<div className="profile-picture-input">
					profile-picture-input
				</div>

				<div className="profile-info-inputs">
					<form className="profile-info-form" onSubmit={handleSubmit(form => this.onSignUpFormSubmit(form))}>
						<div className="row">
							{
								this.renderInputFields(inputFields)
							}
						</div>
						<div className="row">
							<button type="submit" disabled={invalid || pristine || submitting} className="sign-up-button waves-effect waves-light btn green darken-2"> Sign Up </button>
				    	</div>
					</form>
				</div>
			</div>
		)
	}

}

let validate = (form) => {
	let errors = {};

	if (!form.first_name) {
		errors.first_name = 'Please enter your first name';
	} else if (!containLettersOnly(form.first_name)) {
		errors.first_name = 'Must contain letters only'
	} else if (form.first_name.length > 50) {
		errors.first_name = 'Must be less than 50 characters'
	}

	if (!form.last_name) {
		errors.last_name = 'Please enter your last name';
	} else if (!containLettersOnly(form.last_name)) {
		errors.last_name = 'Must contain letters only'
	} else if (form.last_name.length > 50) {
		errors.last_name = 'Must be less than 50 characters'
	}
 
	if (!form.email) {
		errors.email = 'Please enter your email';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
		errors.email = 'Please enter a valid email'
	} 

	if (!form.password) {
		errors.password = 'Please enter your password';
	} else if (form.password.length < 6) {
		errors.password = 'Must be at least 6 characters long'
	} 

	if (!form.confirm_password) {
		errors.confirm_password = 'Please re-enter your password';
	} else if (form.password !== form.confirm_password) {
		errors.confirm_password = 'Password mismatch!'
	} 

	return errors;
}

const mapStateToProps = (state) => {
	return {
		components: state.components
	}
}

export default reduxForm({
	form: 'signUpForm',
	validate
})(connect(mapStateToProps)(SignUpForm));

