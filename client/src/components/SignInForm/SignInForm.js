import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form'

import SignInFormInput from './../SignInFormInput/SignInFormInput';
import './SignInForm.css';

class SignInForm extends Component {

	onSignInFormSubmit(values) {

	}

	render() {
		const {pristine, submitting } = this.props;

		return (
			<div className="sign-in-form">
				<form className="col s12 yellow lighten-5" onSubmit={this.onSignInFormSubmit}>
					<div className="row">
						<Field
				            key={0}
							name="email"
							placeholder=""
							id="email"
							type="email"
							htmlFor="email"
							label="Email"
							component={SignInFormInput} />
					</div>
					<div className="row">
						<Field
				            key={1}
							name="password"
							placeholder=""
							id="password"
							type="password"
							htmlFor="password"
							label="Password"
							component={SignInFormInput} />
					</div>
					<div className="row">
						<button type="submit" disabled={pristine || submitting} className="login-button col s12 waves-effect waves-light btn green darken-2"> Login </button>
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

export default reduxForm({
	form: 'signInForm',
	validate
})(SignInForm);