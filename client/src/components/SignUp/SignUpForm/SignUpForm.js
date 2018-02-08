import React, {Component} from 'react';

import ProfilePicturePlaceholder from './../../../assets/profile-picture-placeholder.png';
import './SignUpForm.css';

class SignUpForm extends Component {
	render() {
		return (
			<form className="sign-up-form"> 
				<div className="sign-up-form-inputs">

					<div className="sign-up-form-input-field row">	
						<div className="input-field col s12 m12 l12">
							<input placeholder="" id="first_name" type="text" className="validate"/>
							<label htmlFor="first_name"> First Name </label>
							<p className="red-text">
								<sub> Error Message </sub>
									{/*
									(this.props.meta.touched && this.props.meta.error) 
										? <sub> {this.props.meta.error} </sub>
										: <sub></sub>
								*/}
							</p>
				        </div>
			        </div>

			        <div className="sign-up-form-input-field row">	
						<div className="input-field col s12 m12 l12">
							<input placeholder="" id="last_name" type="text" className="validate"/>
							<label htmlFor="last_name"> Last Name </label>
							<p className="red-text">
								<sub> Error Message </sub>
									{/*
									(this.props.meta.touched && this.props.meta.error) 
										? <sub> {this.props.meta.error} </sub>
										: <sub></sub>
								*/}
							</p>
				        </div>
			        </div>

			        <div className="sign-up-form-input-field row">	
						<div className="input-field col s12 m12 l12">
							<input placeholder="" id="email" type="text" className="validate"/>
							<label htmlFor="email"> Email </label>
							<p className="red-text">
								<sub> Error Message </sub>
									{/*
									(this.props.meta.touched && this.props.meta.error) 
										? <sub> {this.props.meta.error} </sub>
										: <sub></sub>
								*/}
							</p>
				        </div>
			        </div>

			        <div className="sign-up-form-input-field row">	
						<div className="input-field col s12 m12 l12">
							<input placeholder="" id="password" type="password" className="validate"/>
							<label htmlFor="password"> Password </label>
							<p className="red-text">
								<sub> Error Message </sub>
									{/*
									(this.props.meta.touched && this.props.meta.error) 
										? <sub> {this.props.meta.error} </sub>
										: <sub></sub>
								*/}
							</p>
				        </div>
			        </div>

			        <div className="sign-up-form-input-field row">	
						<div className="input-field col s12 m12 l12">
							<input placeholder="" id="confirm_password" type="password" className="validate"/>
							<label htmlFor="confirm_password"> Confirm Password </label>
							<p className="red-text">
								<sub> Error Message </sub>
									{/*
									(this.props.meta.touched && this.props.meta.error) 
										? <sub> {this.props.meta.error} </sub>
										: <sub></sub>
								*/}
							</p>
				        </div>
			        </div>

				</div>
				<div className="profile-picture-container">
					<div className="profile-picture-preview">
						<img src={ProfilePicturePlaceholder} alt="Profile Picture" />
					</div>
					<div className="file-field input-field">
						<p className="red-text center-align">
							<sub> Error Message </sub>
								{/*
								(this.props.meta.touched && this.props.meta.error) 
									? <sub> {this.props.meta.error} </sub>
									: <sub></sub>
							*/}
						</p>
						<div className="btn orange darken-1">
							<span> Photo </span>
							<input type="file" />
						</div>

						<div className="file-path-wrapper">
							<input className="file-path validate" type="text" />
							
						</div>

					</div>
				</div>
				<div className="sign-up-submit-button">
					<button type="submit" className="waves-effect waves-light btn light-green darken-4"> Sign Up! </button>
					<a href="/sign-in" className="already-have-account"> Already have an account? </a>
				</div>
			</form>
		)
	}
}

export default SignUpForm;