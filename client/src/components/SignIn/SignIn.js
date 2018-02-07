import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
import FaGooglePlus from 'react-icons/lib/fa/google-plus';

import * as actions from './../../actions';
import SignInForm from './SignInForm/SignInForm';
import './SignIn.css';

class SignIn extends Component {

	constructor(props) {
		super(props);
	}

	showSignInStatus() {
		if ((this.props.auth.signInStatus.signInMessage === null) && (this.props.auth.signInStatus.signInAttempted === false)) {
			return <span></span>
		}
		return <p className="center-align red-text"> { this.props.auth.signInStatus.signInMessage } </p>
	}

	renderSignIn() {
		if ((this.props.auth.signInStatus.signInMessage === null) && (this.props.auth.signInStatus.signInAttempted === true)) {
			return <Redirect to={`/users/${this.props.auth.currentUser._id}/dashboard`} />
		} else {
			return (
				<div className="container">
					<h5 className="welcome-back center-align"> Welcome back! </h5>
					<div className="sign-in-form-container row">
						{
							this.showSignInStatus()
						}
						<SignInForm className="spaced" onSignInFormSubmit={(form) => this.props.signInUserWithEmailAndPassword(form)}/>
						<div className="divider"></div>
						<a href="/auth/google" className="sign-in-with-google waves-effect waves-light col s12 m6 l6 offset-m3 offset-l3 grey lighten-3">
							<div className="google-plus-icon-container valign-wrapper red darken-5">
								<FaGooglePlus className="white-text" size={32} />
							</div>
							<p> Sign in with Google </p>
						</a>
						<div className="divider"></div>
						<a href="/sign-up" className="no-left-padding col s12 m6 l6 offset-m3 offset-l3"> Create New Account </a>
						<a href="/forget-password" className="no-left-padding col s12 m6 l6 offset-m3 offset-l3"> Forget Password </a>
					</div>
				</div>
			)
		}
		
	}

	render() {
		return (
			<div className="sign-in-component">
				{
					this.renderSignIn()
				}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth
	}
}

export default connect(mapStateToProps, actions)(SignIn);

