import React, {Component} from 'react';
import {withFormik, Form, Field} from 'formik';
import yup from 'yup';
import axios from 'axios';

import './UpdateNewPasswordInForgetPassword.css';

class UpdateNewPasswordInForgetPassword extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {values, touched, errors, isValid, isSubmitting} = this.props;
		return (
			<Form className="update-new-password-in-forget-password">
				<div className="row">
					<p className="flow-text"> Set new password and confirm... </p>
				</div>
				<div className="row">
			        <div className="input-field col s12 m6 l4">
			            <Field 
			            	name="newPassword"
			            	placeholder="" 
			            	id="newPassword" 
			            	type="password"
			            	value={values.newPassword} />
			            <label htmlFor="newPassword"> New Password </label>
			        	<p className="red-text right-align"><sup> {(touched && touched.newPassword && errors && errors.newPassword) ? errors.newPassword : ''} </sup></p>
			        </div>
			        <div className="input-field col s12 m6 l4">
			            <Field 
			            	name="confirmNewPassword"
			            	placeholder="" 
			            	id="confirmNewPassword" 
			            	type="password"
			            	value={values.confirmNewPassword} />
			            <label htmlFor="confirmNewPassword"> Confirm New Password </label>
			        	<p className="red-text right-align"><sup> {(touched && touched.confirmNewPassword && errors && errors.confirmNewPassword) ? errors.confirmNewPassword : ''} </sup></p>
			        </div>
		        </div>
		        <div className="row">
		        	<div className="col s12 m6 l4">
		        		<button type="submit" disabled={isSubmitting || !isValid} className="waves-effect waves-light btn-flat red darken-2 white-text"> Update New Password </button>
		    		</div>
		    	</div>
		    </Form>
		)
	}
}

let validate = (values) => {
	let errors = {};

	if (!values.newPassword) {
		errors.newPassword = 'Required!';
	} else if (values.newPassword.length < 6) {
		errors.newPassword = 'Must be at least 6 characters long';
	} else if (values.newPassword.length > 75) {
		errors.newPassword = 'Must be less than 75 characters';
	} 

	if (!values.confirmNewPassword) {
		errors.confirmNewPassword = 'Required!';
	} else if (values.confirmNewPassword != values.newPassword) {
		errors.confirmNewPassword = 'Password mismatch!';
	}

	return errors;
}

const FormikUpdateNewPasswordInForgetPassword = withFormik({
	mapPropsToValues(props) {
		return {
			newPassword: '',
			confirmNewPassword: ''
		}
	},
	validate,
	async handleSubmit(values, {props}) {
		console.log(values);
		const passwordResetStatus = await axios.put(`/api/users/${props.userId}/resetPassword`, {password: values.newPassword});
		console.log('PASSWORD RESET STATUS \n', passwordResetStatus);
		props.onTransitioningFromStep();
	}
})(UpdateNewPasswordInForgetPassword);

export default FormikUpdateNewPasswordInForgetPassword;

