import React, { Component } from 'react';
import FaGooglePlus from 'react-icons/lib/fa/google-plus';

import SignInForm from './SignInForm/SignInForm';
import './SignIn.css';

class SignIn extends Component {
	render() {
		return (
			<div className="sign-in-component">
				<div className="container">
					<h5 className="welcome-back center-align"> Welcome back! </h5>
					<div className="sign-in-form-container row">
						<SignInForm />
						<div className="divider"></div>
						<a href="/auth/google" className="sign-in-with-google waves-effect waves-light col s12 m6 l6 offset-m3 offset-l3 grey lighten-3">
							<div className="google-plus-icon-container valign-wrapper red darken-5">
								<FaGooglePlus className="white-text" size={32} />
							</div>
							<p> Sign in with Google </p>
						</a>
					</div>
				</div>
			</div>
		)
	}
}

export default SignIn;