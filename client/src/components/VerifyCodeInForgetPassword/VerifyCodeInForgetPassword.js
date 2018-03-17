import React, {Component} from 'react';
import {withFormik, Form, Field} from 'formik';
import yup from 'yup';

import './VerifyCodeInForgetPassword.css';

class VerifyCodeInForgetPassword extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {values, touched, errors, isValid, isSubmitting} = this.props;
		return (
			<Form className="verify-code-in-forget-password">
				<div className="row">
					<p className="flow-text"> Check your email for a verification code ( i.e., <code>ByamOdWV</code> ) </p>
				</div>
				<div className="row">
			        <div className="input-field col s12 m6 l4">
			            <Field 
			            	name="code"
			            	placeholder="" 
			            	id="code" 
			            	type="text"
			            	value={values.code} />
			            <label htmlFor="code"> Code </label>
			        	<p className="red-text right-align"><sup> {(touched && touched.email && errors && errors.email) ? errors.email : ''} </sup></p>
			        </div>
		        </div>
		        <div className="row">
		        	<div className="col s12 m6 l4">
		        		<button type="submit" disabled={isSubmitting || !isValid} className="waves-effect waves-light btn-flat red darken-2 white-text"> Verify Code </button>
		    		</div>
		    	</div>
		    </Form>
		)
	}
}

let validate = (values) => {
	let errors = {};

	if (!values.code) {
		errors.code = 'Required!';
	} else if (values.code.length < 6) {
		errors.code = 'Must be longer than 6 characters'
	} 

	return errors;
}

const FormikVerifyCodeInForgetPassword = withFormik({
	mapPropsToValues(props) {
		return {
			code: ''
		}
	},
	validate,
	handleSubmit(values, {props}) {
		console.log(values);
		props.onTransitioningFromStep();
	}
})(VerifyCodeInForgetPassword);

export default FormikVerifyCodeInForgetPassword;

