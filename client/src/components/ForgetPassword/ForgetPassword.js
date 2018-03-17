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
	}

	componentDidUpdate() {
		$(document).ready(function(){
			$('.forget-password-collapsible').collapsible();
		});
	}

	renderRetrivePassword(retrivePassword) {
		return (
			<li className={`z-depth-4 ${retrivePassword.done ? 'fade' : ''}`}>
				<div 
					className={`collapsible-header ${retrivePassword.active ? 'active' : ''}`}>
					<i className="material-icons">call_missed_outgoing</i> 
					Retrive Password 
				</div>
				<div className="collapsible-body">
					<div className="retrive-password-container">
						<FormikRetrivePasswordInForgetPassword onTransitioningFromStep={() => this.props.transitioningFromStep(retrivePassword)} />
					</div>
				</div>
			</li>
		)
	}

	renderVerifyCode(verifyCode) {
		return (
			<li className={`z-depth-4 ${verifyCode.done ? 'fade' : ''}`}>
				<div 
					className={`collapsible-header  ${verifyCode.active ? 'active' : ''}`}>
					<i className="material-icons">code</i> 
					Verify Code 
				</div>
				<div className="collapsible-body">
					<div className="verify-code-container">
						<FormikVerifyCodeInForgetPassword onTransitioningFromStep={() => this.props.transitioningFromStep(verifyCode)} />
					</div>
				</div>
			</li>
		)
	}

	renderUpdateNewPassword(updateNewPassword) {
		return (
			<li className={`z-depth-4 ${updateNewPassword.done ? 'fade' : ''}`}>
				<div 
					className={`collapsible-header ${updateNewPassword.active ? 'active' : ''}`}>
					<i className="material-icons">update</i> 
					Update New Password 
				</div>
				<div className="collapsible-body">
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
					className={`collapsible-header ${letsSignIn.done ? 'fade' : ''} ${letsSignIn.active ? 'active' : ''}`}>
					<i className="material-icons">call_made</i> 
					Let's Sign In
				</div>
				<div className="collapsible-body">
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

				<ul className="forget-password-collapsible" data-collapsible="accordion">
					{
						retrivePassword.show
							? this.renderRetrivePassword(retrivePassword) 
							: ""
					}
					{
						verifyCode.show
							? this.renderVerifyCode(verifyCode) 
							: ""
					}
					{
						updateNewPassword.show
							? this.renderUpdateNewPassword(updateNewPassword) 
							: ""
					}
					{
						letsSignIn.show
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

