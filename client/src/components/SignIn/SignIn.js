import React, {Component} from 'react';
import FaGooglePlus from 'react-icons/lib/fa/google-plus';
import Media from 'react-media';

// import SignInForm from './../SignInForm/SignInForm';
import './SignIn.css';

class SignIn extends Component {

	renderSignIn(screenClass) {
		return (
			<div className={`sign-in ${screenClass}`}>
				<div className="content-holder">
					<h4 className="title center-align"> Focus </h4>
					<div className="divider"></div>
					<div className="form-container">
						{/*<form>
							<div className="login">
								<h5> Login </h5>
								<div className="divider"></div>
								SignInForm
							</div>
							<button type="submit" className="waves-effect waves-light btn"> Login </button>
						</form>*/}
					</div>

					<br />

					<a href="/auth/google" className="just-go-with-google-link">
						<div className="just-go-with-google red darken-3">
							<div className="google-icon">
								<FaGooglePlus size={32}/>
							</div>
							<p> Just go with Google </p>
						</div>
					</a>

					<br />

					<a href="/forget-password" className={`forget-password ${(screenClass === 'small-screen') ? 'center-align' : 'left-align'}`}> Forget Password? </a>
					<a href="/sign-up" className={`create-new-account ${(screenClass === 'small-screen') ? 'center-align' : 'left-align'}`}> Create New Account </a>

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
			                this.renderSignIn('small-screen')
			            ) 
			            : (
			            	<Media query={{minWidth: 401, maxWidth: 799}}>
						          {matches =>
						            matches 
							            ? (
							                this.renderSignIn('medium-screen')
							            ) 
							            : (
							            	 <Media query="(min-width: 800px)">
										          {matches =>
										            matches 
											            ? (
											                this.renderSignIn('large-screen')
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