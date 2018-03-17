import React, {Component} from 'react';
import {withFormik, Form, Field} from 'formik';
import yup from 'yup';

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
	handleSubmit(values, {props}) {
		console.log(values);
		props.onTransitioningFromStep();
	}
})(RetrivePasswordInForgetPassword);

export default FormikRetrivePasswordInForgetPassword;

