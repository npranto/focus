import React, {Component} from 'react';
import {withFormik, Form, Field} from 'formik';
import axios from 'axios';

import './RetrivePasswordInForgetPassword.css';

class RetrivePasswordInForgetPassword extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {values, touched, errors, isValid, isSubmitting} = this.props;
		return (
			<Form className="retrive-password-in-forget-password">
				<div className="row">
					<p className="flow-text"> Ok, let's get you focusing quick, what's your email? </p>
				</div>
				<div className="row">
			        <div className="input-field col s12 m6 l4">
			            <Field 
			            	name="email"
			            	placeholder="" 
			            	id="email" 
			            	type="email"
			            	value={values.email} />
			            <label htmlFor="email"> Email </label>
			        	<p className="red-text right-align"><sup> {(touched && touched.email && errors && errors.email) ? errors.email : ''} </sup></p>
			        </div>
		        </div>
		        <div className="row">
		        	<div className="col s12 m6 l4">
		        		<button type="submit" disabled={isSubmitting || !isValid} className="waves-effect waves-light btn-flat red darken-2 white-text"> Retrive Password </button>
		    		</div>
		    	</div>
		    </Form>
		)
	}
}

let validate = (values) => {
	let errors = {};

	if (!values.email) {
		errors.email = 'Required!';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email!'
	} 

	return errors;
}

const FormikRetrivePasswordInForgetPassword = withFormik({
	mapPropsToValues(props) {
		return {
			email: ''
		}
	},
	validate,
	async handleSubmit(values, {props, setErrors, resetForm, setSubmitting}) {
		console.log(values);
		const checkEmailStatus = await axios.post('/api/users/checkEmail', values)
		console.log(checkEmailStatus);
		if (!checkEmailStatus.data.success) {
			setErrors({
				email: checkEmailStatus.data.message
			});
		}
		if (checkEmailStatus.data.success) {
			props.onEmailCodeSuccess(checkEmailStatus.data.data._id);
			props.onTransitioningFromStep();
			resetForm();
		}
		setSubmitting(false);
	}
})(RetrivePasswordInForgetPassword);

export default FormikRetrivePasswordInForgetPassword;

