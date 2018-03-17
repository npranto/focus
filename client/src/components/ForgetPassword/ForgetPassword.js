import React, {Component} from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';

import * as actionCreators from './../../actions';
import FormikRetrivePasswordInForgetPassword from './../RetrivePasswordInForgetPassword/RetrivePasswordInForgetPassword';
import FormikVerifyCodeInForgetPassword from './../VerifyCodeInForgetPassword/VerifyCodeInForgetPassword';
import FormikUpdateNewPasswordInForgetPassword from './../UpdateNewPasswordInForgetPassword/UpdateNewPasswordInForgetPassword';
import LetsSignInInForgetPassword from './../LetsSignInInForgetPassword/LetsSignInInForgetPassword';
import './ForgetPassword.css';

class ForgetPassword extends Component {

	constructor(props) {
		super(props);

		$(document).ready(function(){
			$('.forget-password-collapsible').collapsible();
		});

		// style={{pointerEvents: 'none', opacity: 0.3}}
	}

	renderRetrivePassword(retrivePassword) {
		return (
			<li className="z-depth-4">
				<div 
					class={`collapsible-header ${retrivePassword.show ? 'active' : ''}`} 
					style={retrivePassword.done ? {pointerEvents: 'none', opacity: 0.3} : {}}>
					<i class="material-icons">call_missed_outgoing</i> 
					Retrive Password 
				</div>
				<div class="collapsible-body">
					<div className="retrive-password-container">
						<FormikRetrivePasswordInForgetPassword onTransitioningFromStep={() => this.props.transitioningFromStep(retrivePassword)} />
					</div>
				</div>
			</li>
		)
	}

	renderVerifyCode(verifyCode) {
		return (
			<li className="z-depth-4">
				<div 
					class={`collapsible-header ${verifyCode.show ? 'active' : ''}`} 
					style={verifyCode.done ? {pointerEvents: 'none', opacity: 0.3} : {}}>
					<i class="material-icons">code</i> 
					Verify Code 
				</div>
				<div class="collapsible-body">
					<div className="verify-code-container">
						<FormikVerifyCodeInForgetPassword onTransitioningFromStep={() => this.props.transitioningFromStep(verifyCode)} />
					</div>
				</div>
			</li>
		)
	}

	renderUpdateNewPassword(updateNewPassword) {
		return (
			<li className="z-depth-4">
				<div 
					class={`collapsible-header ${updateNewPassword.show ? 'active' : ''}`} 
					style={updateNewPassword.done ? {pointerEvents: 'none', opacity: 0.3} : {}}>
					<i class="material-icons">update</i> 
					Update New Password 
				</div>
				<div class="collapsible-body">
					<div className="update-new-password-container">
						<FormikUpdateNewPasswordInForgetPassword onTransitioningFromStep={() => this.props.transitioningFromStep(updateNewPassword)} />
					</div>
				</div>
			</li>
		)
	}

	renderLetsSignIn(letsSignIn) {
		return (
			<li className="z-depth-4">
				<div 
					class={`collapsible-header ${letsSignIn.show ? 'active' : ''}`} 
					style={letsSignIn.done ? {pointerEvents: 'none', opacity: 0.3} : {}}>
					<i class="material-icons">update</i> 
					Let's Sign In
				</div>
				<div class="collapsible-body">
					<div className="lets-sign-in-container">
						<LetsSignInInForgetPassword />
					</div>
				</div>
			</li>
			
		)
	}

	render() {
		const {retrivePassword, verifyCode, updateNewPassword, letsSignIn} = this.props.components.forgetPassword;
		return (
			<div className="forget-password">
				<h3> Forget Password </h3>

				<ul class="forget-password-collapsible" data-collapsible="accordion">
					{
						retrivePassword
							? this.renderRetrivePassword(retrivePassword) 
							: ""
					}
					{
						verifyCode
							? this.renderVerifyCode(verifyCode) 
							: ""
					}
					{
						updateNewPassword
							? this.renderUpdateNewPassword(updateNewPassword) 
							: ""
					}
					{
						letsSignIn
							? this.renderLetsSignIn(letsSignIn) 
							: ""
					}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		components: state.components
	}
}

export default connect(mapStateToProps, actionCreators)(ForgetPassword);

