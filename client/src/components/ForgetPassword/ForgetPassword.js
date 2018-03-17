import React, {Component} from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';

import FormikRetrivePasswordInForgetPassword from './../RetrivePasswordInForgetPassword/RetrivePasswordInForgetPassword';
import FormikVerifyCodeInForgetPassword from './../VerifyCodeInForgetPassword/VerifyCodeInForgetPassword';
import FormikUpdateNewPasswordInForgetPassword from './../UpdateNewPasswordInForgetPassword/UpdateNewPasswordInForgetPassword';
import './ForgetPassword.css';

class ForgetPassword extends Component {

	constructor(props) {
		super(props);

		$(document).ready(function(){
			$('.forget-password-collapsible').collapsible();
		});
	}

	renderRetrivePassword(showRetrivePassword) {
		return (
			<li className="z-depth-4">
				<div class={`collapsible-header ${showRetrivePassword ? 'active' : ''}`}><i class="material-icons">call_missed_outgoing</i> Retrive Password </div>
				<div class="collapsible-body">
					<div className="retrive-password">
						<FormikRetrivePasswordInForgetPassword />
					</div>
				</div>
			</li>
		)
	}

	renderVerifyCode(showVerifyCode) {
		return (
			<li className="z-depth-4">
				<div class={`collapsible-header ${showVerifyCode ? 'active' : ''}`}><i class="material-icons">code</i> Verify Code </div>
				<div class="collapsible-body">
					<div className="retrive-password">
						<FormikVerifyCodeInForgetPassword />
					</div>
				</div>
			</li>
		)
	}

	renderUpdateNewPassword(showUpdateNewPassword) {
		return (
			<li className="z-depth-4">
				<div class={`collapsible-header ${showUpdateNewPassword ? 'active' : ''}`}><i class="material-icons">call_missed_outgoing</i> Retrive Password </div>
				<div class="collapsible-body">
					<div className="retrive-password">
						<FormikUpdateNewPasswordInForgetPassword />
					</div>
				</div>
			</li>
		)
	}

	renderLetsSignIn(showLetsSignIn) {
		return (
			<li className="z-depth-4">
				<div class={`collapsible-header ${showLetsSignIn ? 'active' : ''}`}><i class="material-icons">call_missed_outgoing</i> Retrive Password </div>
				<div class="collapsible-body">
					<div className="retrive-password">
						<FormikRetrivePasswordInForgetPassword />
					</div>
				</div>
			</li>
		)
	}

	render() {
		const {showRetrivePassword, showVerifyCode, showUpdateNewPassword, showLetsSignIn} = this.props.components.forgetPassword;
		return (
			<div className="forget-password">
				<h3> Forget Password </h3>

				<ul class="forget-password-collapsible" data-collapsible="accordion">
					{
						showRetrivePassword 
							? this.renderRetrivePassword(showRetrivePassword) 
							: showVerifyCode 
								? this.renderVerifyCode(showVerifyCode) 
								: showUpdateNewPassword 
									? this.renderUpdateNewPassword(showUpdateNewPassword) 
									: showLetsSignIn 
										? this.renderLetsSignIn(showLetsSignIn) 
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

export default connect(mapStateToProps)(ForgetPassword);

