import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Media from 'react-media';

import * as actionCreators from './../../actions';
import SignUpFormInputField from './../SignUpFormInputField/SignUpFormInputField';
import AddProfilePicture from './../AddProfilePicture/AddProfilePicture';
import {containLettersOnly} from './../../helpers/utils.js';
import './SignUpForm.css';

class SignUpForm extends Component {

	onSignUpFormSubmit(form) {
		console.log(this.props.components.signUpForm.profilePicture);
		let profile = {
			firstName: form.firstName,
			lastName: form.lastName,
			fullName: `${form.firstName} ${form.lastName}`,
			email: form.email,
			password: form.password, 
		} 
		if (this.props.components.signUpForm.profilePicture) {
			profile['profilePicture'] = this.props.components.signUpForm.profilePicture.filename;
		}
		console.log(profile);
		this.props.signUpNewUser(profile);
	}

	onRemoveProfilePicture() {
		this.props.removeProfilePicture();
	}

	onProfilePictureSelectToUpload(e) {
		this.props.uploadProfilePicture(e.target.files[0]);
	}


	renderInputFields(inputFields) {
		return inputFields.map((inputField, index) => {
			const {name, placeholder, id, type, htmlFor, label} = inputField;
			return <Field
			            key={index}
						name={name}
						placeholder={placeholder}
						id={id}
						type={type}
						htmlFor={htmlFor}
						label={label}
						inputContainerSize={name==='email' ? 'm12 l12' : 'm6 l6'}
						className="validate"
						component={SignUpFormInputField} />
		})
	}

	renderSignUpForm(screenClass) {
		const {handleSubmit, invalid, pristine, submitting } = this.props;
		const {inputFields, profilePicture, profilePictureUploadError, signUpError} = this.props.components.signUpForm;

		return (
			<div className={`sign-up-form ${screenClass}`}>
				<div className="profile-picture-input">
					<AddProfilePicture
						defaultPhoto={profilePicture} 
						profilePictureUploadError={profilePictureUploadError}
						onProfilePictureSelectToPreview={(e) => this.onProfilePictureSelectToUpload(e)}
						onRemoveProfilePicture={() => this.onRemoveProfilePicture()} />
				</div>
				<div className="profile-info-inputs">
					<p className="center-align red-text"> {signUpError ? signUpError : ''} </p>	
					<form className="profile-info-form" onSubmit={handleSubmit(form => this.onSignUpFormSubmit(form))}>
						<div className="row">
							{
								this.renderInputFields(inputFields)
							}
						</div>
						<div className="row">
							<p>
								<Field name="agreedToTermsAndPrivacy" id="agreedToTermsAndPrivacy" component="input" type="checkbox"/>
								<label htmlFor="agreedToTermsAndPrivacy"> I agree to all <Link to="/terms-of-conditions">Terms of Conditions</Link> and <Link to="/privacy-policy">Privacy Policy</Link> </label>
						    </p>
						</div>
						<div className="row">
							<button type="submit" disabled={invalid || pristine || submitting} className="sign-up-button waves-effect waves-light btn green darken-2"> Sign Up </button>
				    	</div>
					</form>
				</div>
			</div>
		)
	}

	render() {
		return (
			<Media query="(min-width: 750px)">
		        { matches =>
		            matches 
			            ? (
			                this.renderSignUpForm('sign-up-form-large-screen')
			            ) 
			            : (
			            	this.renderSignUpForm('sign-up-form-small-screen')
			            )
		        }
		    </Media>
		)
	}

}

let validate = (form) => {
	let errors = {};

	if (!form.firstName) {
		errors.firstName = 'Please enter your first name';
	} else if (!containLettersOnly(form.firstName)) {
		errors.firstName = 'Must contain letters only'
	} else if (form.firstName.length > 50) {
		errors.firstName = 'Must be less than 50 characters'
	}

	if (!form.lastName) {
		errors.lastName = 'Please enter your last name';
	} else if (!containLettersOnly(form.lastName)) {
		errors.lastName = 'Must contain letters only'
	} else if (form.lastName.length > 50) {
		errors.lastName = 'Must be less than 50 characters'
	}
 
	if (!form.email) {
		errors.email = 'Please enter your email';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
		errors.email = 'Please enter a valid email'
	} 

	if (!form.password) {
		errors.password = 'Please enter your password';
	} else if (form.password.length < 6) {
		errors.password = 'Must be at least 6 characters long'
	} 

	if (!form.confirmPassword) {
		errors.confirmPassword = 'Please re-enter your password';
	} else if (form.password !== form.confirmPassword) {
		errors.confirmPassword = 'Password mismatch!'
	} 

	if (!form.agreedToTermsAndPrivacy) {
		errors.agreedToTermsAndPrivacy = 'You must agree to both Terms of Conditions and Privacy Policy';
	}

	return errors;
}

const mapStateToProps = (state) => {
	return {
		components: state.components
	}
}

export default reduxForm({
	form: 'signUpForm',
	validate
})(connect(mapStateToProps, actionCreators)(SignUpForm));

