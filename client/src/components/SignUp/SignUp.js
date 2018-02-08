import React, {Component} from 'react';

import SignUpForm from './SignUpForm/SignUpForm';
import './SignUp.css';

class SignUp extends Component {
	render() {
		return (
			<div className="sign-up-component">
				<h4 className="center-align"> Create New Account </h4>
				<SignUpForm />
			</div>
		)
	}
}

export default SignUp;