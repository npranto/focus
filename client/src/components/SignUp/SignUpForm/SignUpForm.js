import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form'

import SignUpFormInputField from './SignUpFormInputField/SignUpFormInputField';
import ProfilePicturePlaceholder from './../../../assets/profile-picture-placeholder.png';
import ProfilePicturePlaceholderPortrait from './../../../assets/profile-picture-placeholder-portrait.jpg';
import ProfilePicturePlaceholderLandscape from './../../../assets/profile-picture-placeholder-landscape.jpeg';
import './SignUpForm.css';

class SignUpForm extends Component {

	renderInputFields(inputFields) {
		return inputFields.map((inputField, index) => {
			return <Field 
					key={index}
					name={inputField.name}
					placeholder={inputField.placeholder}
					id={inputField.id}
					type={inputField.type}
					className={inputField.className}
					htmlFor={inputField.htmlFor}
					label={inputField.label} 
					component={SignUpFormInputField} />
		})
	}

	render() {
		const inputFields = [
			{
				name: 'first_name',
				placeholder: '',
				id: 'first_name',
				type: 'text',
				className: 'validate',
				htmlFor: 'first_name',
				label: 'First Name'
			},
			{
				name: 'last_name',
				placeholder: '',
				id: 'last_name',
				type: 'text',
				className: 'validate',
				htmlFor: 'last_name',
				label: 'Last Name'
			},
			{
				name: 'email',
				placeholder: '',
				id: 'email',
				type: 'text',
				className: 'validate',
				htmlFor: 'email',
				label: 'Email'
			},
			{
				name: 'password',
				placeholder: '',
				id: 'password',
				type: 'password',
				className: 'validate',
				htmlFor: 'password',
				label: 'Password'
			},
			{
				name: 'confirm_password',
				placeholder: '',
				id: 'confirm_password',
				type: 'password',
				className: 'validate',
				htmlFor: 'confirm_password',
				label: 'Confirm Password'
			}
		]

		return ( 
			<form onSubmit={ this.props.handleSubmit(form => this.props.onSignUpFormSubmit(form)) } className="sign-up-form grey lighten-3"> 
				<div className="sign-up-form-inputs">

					{ this.renderInputFields(inputFields) }

				</div>
				<div className="profile-picture-container">
					<div className="profile-picture-preview">
						<img src={ProfilePicturePlaceholderLandscape} alt="Profile Picture" />
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

export default reduxForm({
	form: 'signUpForm'
})(SignUpForm);
