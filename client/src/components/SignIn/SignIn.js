import React, {Component} from 'react';
import Media from 'react-media';
import {Link} from 'react-router-dom'

import SignInForm from './../SignInForm/SignInForm';
import GoogleOauth from './../GoogleOauth/GoogleOauth';
import './SignIn.css';

class SignIn extends Component {

	renderSignIn(screenClass) {
		return (
			<div className={`sign-in ${screenClass}`}>
				<div className="content-holder">
					<h5 className="title center-align"> Sign In </h5>
					<div className="form-container">
						<SignInForm />
					</div>
					<GoogleOauth />
					<br />
					<a href="/forget-password" className="forget-password-link"> Forget Password? </a>
					<a href="/sign-up" className="create-new-account-link"> Create New Account </a>

				</div>
			</div>
		)
	}

	render() {
		return (
			<Media query="(max-width: 400px)">
		          {matches =>
		            matches 
		            	? (
			                this.renderSignIn('sign-in-small-screen')
			            ) 
			            : (
			            	<Media query={{minWidth: 401, maxWidth: 799}}>
						          {matches =>
						            matches 
							            ? (
							                this.renderSignIn('sign-in-medium-screen')
							            ) 
							            : (
							            	 <Media query="(min-width: 800px)">
										          {matches =>
										            matches 
											            ? (
											                this.renderSignIn('sign-in-large-screen')
											            ) 
											            : ''
										          }
										    </Media>
							            )
						          }
						    </Media>
			           	)
		          }
		    </Media>
		)
	}
}

export default SignIn;