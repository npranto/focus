import React, {Component} from 'react';

import SignUpForm from './SignUpForm/SignUpForm';
import './SignUp.css';

class SignUp extends Component {

	adjustFormDataBeforeSubmit(form) {
		let copy = {...form};
		copy.fullName = `${copy.firstName.trim()} ${copy.lastName.trim()}`;
		delete copy['confirmPassword'];
		return copy;
	}

	render() {
		return (
			<div className="sign-up-component">
				<h4 className="center-align"> Create New Account </h4>
				<SignUpForm onSignUpFormSubmit={form => console.log(this.adjustFormDataBeforeSubmit(form))}/>
			</div>
		)
	}
}

export default SignUp;