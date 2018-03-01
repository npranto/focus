import React, {Component} from 'react';

import './SignInForm.css';

class SignInForm extends Component {
	render() {
		return (
			<div className="sign-in-form">
				<form className="col s12 yellow lighten-5">
					<div className="row">
						<div className="input-field col s12">
							<input placeholder="" id="email" type="email" className="validate" />
							<label htmlFor="email"> Email </label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input placeholder="" id="password" type="password" className="validate" />
							<label htmlFor="password"> Password </label>
						</div>
					</div>
					<div className="row">
						<button type="submit" className="login-button col s12 waves-effect waves-light btn green darken-2"> Login </button>
			    	</div>
			    </form>
			</div>
		)
	}
}

export default SignInForm;