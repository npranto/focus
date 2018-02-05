import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

import SignInFormInputField from './SignInFormInputField/SignInFormInputField';
import './SignInForm.css';

class SignInForm extends Component {

	constructor(props) {
		super(props);
	}

	renderInputFields(inputFields) {
		return inputFields.map((inputField, index) => {
			return <Field 
						key={index}
						name={inputField.name} 
						placeholder={inputField.placeholder}
						id={inputField.id}
						type={inputField.type}
						className={inputField.validate}
						htmlFor={inputField.htmlFor}
						label={inputField.label}
						component={SignInFormInputField} />
		})
	}

	logFormValues(values) {
		console.log(values);
		window.alert(values);
	}

	render() {
		const inputFields = [
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
			}
		]

		return (
			<form onSubmit={this.props.handleSubmit(form => this.logFormValues(form))} className="local-sign-in col s12 m6 l6 offset-m3 offset-l3 grey lighten-3">
				{
					this.renderInputFields(inputFields)
				}
				<button type="submit" className="waves-effect waves-light btn light-green darken-4">Login</button>
			</form>
		)
	}
}

export default reduxForm({
	form: 'signInForm'
})(SignInForm);