import React, { Component } from 'react';

import './SignIn.css';

class SignIn extends Component {
	render() {
		return (
			<div className="sign-in-component">
				<div className="container">
					<h5 className="welcome-back center-align"> Welcome back! </h5>
					<div className="local-sign-in-form-container row">
						<form className="col s12 m6 l6 offset-m3 offset-l3 blue-grey lighten-5">
							<div className="row">
								<div className="input-field col s12 m12 l12">
									<input placeholder="jsmith@gmail.com" id="email" type="text" className="validate"/>
									<label htmlFor="email">Email</label>
						        </div>
							</div>
							<div className="row">
								<div className="input-field col s12 m12 l12">
									<input placeholder="******" id="password" type="text" className="validate"/>
									<label htmlFor="password">Password</label>
						        </div>
							</div>
							{/*<div class="login-button-container row">
								<div class="col s12 m12 l12">
								</div>
							</div>*/}
							<a type="submit" className="waves-effect waves-light btn light-green darken-4">Login</a>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default SignIn;