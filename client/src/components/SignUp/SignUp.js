import React, {Component} from 'react';
import Media from 'react-media';
import {Link} from 'react-router-dom';

import SignUpForm from './../SignUpForm/SignUpForm';
import GoogleOauth from './../GoogleOauth/GoogleOauth';
import './SignUp.css';

class SignUp extends Component {
	renderSignUp(screenClass) {
		return (
			<div className={`sign-up ${screenClass}`}>
				<div className="content-holder">
					<h5 className="title center-align"> Create New Account </h5>
					<div className="form-container">
						<SignUpForm />
					</div>
					<GoogleOauth />
					<br />
					<Link to="/sign-in" className={`forget-password ${(screenClass === 'sign-in-small-screen') ? 'center-align' : 'left-align'}`}> Already have account? </Link>
				</div>
			</div>
		)
	}

	render() {
		return (
			<Media query="(max-width: 799px)">
		          {matches =>
		            matches 
		            	? (
			                this.renderSignUp('sign-up-small-screen')
			            ) 
			            : (
			            	<Media query="(min-width: 800px)">
						          {matches =>
						            matches 
							            ? (
							                this.renderSignUp('sign-up-large-screen')
							            ) 
							            : ''
						          }
						    </Media>
			           	)
		          }
		    </Media>
		)
	}
}

export default SignUp;