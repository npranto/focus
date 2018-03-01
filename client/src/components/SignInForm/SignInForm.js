import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';

import * as actionCreators from './../../actions';
import SignInFormInputField from './../SignInFormInputField/SignInFormInputField';
import './SignInForm.css';

class SignInForm extends Component {

	onSignInFormSubmit(form) {
		this.props.loginWithEmailAndPassword(form);
	}

	renderInputFields(inputFields) {
		return inputFields.map((inputField, index) => {
			return <Field
			            key={index}
						name={inputField.name}
						placeholder={inputField.placeholder}
						id={inputField.id}
						type={inputField.type}
						htmlFor={inputField.htmlFor}
						label={inputField.label}
						component={SignInFormInputField} />
		})
	}


	render() {
		const {handleSubmit, invalid, pristine, submitting, } = this.props;
		const {inputFields, signInError} = this.props.components.signInForm;

		return (
			<div className="sign-in-form">
				<form className="col s12 yellow lighten-5" onSubmit={handleSubmit(form => this.onSignInFormSubmit(form))}>
					<p className="center-align red-text"> {signInError ? signInError : ''} </p>					
					{
						this.renderInputFields(inputFields)
					}
					<div className="row">
						<button type="submit" disabled={invalid || pristine || submitting} className="login-button col s12 waves-effect waves-light btn green darken-2"> Login </button>
			    	</div>
			    </form>
			</div>
		)
	}
}

const validate = (form) => {
	let errors = {};

	if (!form.email) {
		errors.email = 'Please enter your email';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
		errors.email = 'Please enter a valid email'
	} 


	if (!form.password) {
		errors.password = 'Please enter your password';
	} else if (form.password.length < 6) {
		errors.password = 'Your password must be at least 6 characters long'
	} 

	return errors;
}

const mapStateToProps = (state) => {
	return {
		components: state.components
	}
}

export default reduxForm({
	form: 'signInForm',
	validate
})(connect(mapStateToProps, actionCreators)(SignInForm));
