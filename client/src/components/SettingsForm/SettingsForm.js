import React, {Component} from 'react';
import FaUserSecret from 'react-icons/lib/fa/user-secret';
import $ from 'jquery';
import {withFormik, Form, Field} from 'formik';
import Yup from 'yup';

import AddProfilePicture from './../AddProfilePicture/AddProfilePicture';
import './SettingsForm.css';

class SettingsForm extends Component {
	constructor(props) {
		super(props);

		$(document).ready(function(){
		    $('.settings-form-collapsible').collapsible();
	  	});
	}

	render() {
		const {currentUser, values, errors, touched, isSubmitting} = this.props;
		console.log(touched);

		return (
			<Form id="settingsForm">
				<ul className="collapsible settings-form-collapsible" data-collapsible="accordion">
					<li>
						<div className="collapsible-header active"><i className="material-icons blue-text">person</i> Personal Information </div>
						<div className="collapsible-body grey lighten-4">
							<div className="row">
							        <div className="input-field col s12 m6 l6">
							        	<Field 
							        		name="firstName"
							        		placeholder=""
							        		id="firstName"
							        		type="text" />
							            <label htmlFor="firstName"> First Name </label>
							        	<p className="red-text right-align"><sup> {(touched && touched.firstName && errors && errors.firstName) ? errors.firstName : ''}  </sup></p>
							        </div>
							        <div className="input-field col s12 m6 l6">
							            <Field 
							            	name="lastName"
							        		placeholder=""
							        		id="lastName"
							        		type="text" />
							            <label htmlFor="lastName"> Last Name </label>
							        	<p className="red-text right-align"><sup> {(touched && touched.lastName && errors && errors.lastName) ? errors.lastName : ''} </sup></p>
							        </div>
							        <div className="input-field col s12 m12 l12">
							        	<Field 
							        		disabled
							            	name="email"
							        		placeholder=""
							        		id="email"
							        		type="email" />
							            <label htmlFor="email"> Email </label>
							        	<p className="red-text right-align"><sup></sup></p>
							        </div>
						        
						    </div>
						</div>
					</li>

					<li>
						<div className="collapsible-header"><i className="material-icons green-text">credit_card</i> Credentials </div>
						<div className="collapsible-body grey lighten-4">
							<div className="row">
						        <div className="input-field col s12 m6 l6">
						        	<Field 
						            	name="newPassword"
						        		placeholder=""
						        		id="newPassword"
						        		type="text" />
						            <label htmlFor="newPassword"> New Password </label>
						        	<p className="red-text right-align"><sup> {(touched && touched.newPassword && errors && errors.newPassword) ? errors.newPassword : ''} </sup></p>
						        </div>
						        <div className="input-field col s12 m6 l6">
						            <Field 
						            	name="confirmNewPassword"
						        		placeholder=""
						        		id="confirmNewPassword"
						        		type="text" />
						            <label htmlFor="confirmNewPassword"> Confirm New Password </label>
						        	<p className="red-text right-align"><sup> {(touched && touched.confirmNewPassword && errors && errors.confirmNewPassword) ? errors.confirmNewPassword : ''} </sup></p>
						        </div>
						    </div>
						</div>
					</li>

					{/*<li>
						<div className="collapsible-header active"><i className="material-icons orange-text">photo</i> Profile Picture </div>
						<div className="collapsible-body grey lighten-4">
							<AddProfilePicture />
							<div className="row">
					        	<div className="col s12 m6 l4">
					        		<button type="submit" className="waves-effect waves-light btn-flat red darken-2 white-text"> Update </button>
					    		</div>
					    	</div>
						</div>
					</li>*/}
				</ul>
	        	<div className="col s12 m6 l4">
	        		<button type="submit" disabled={isSubmitting} className="waves-effect waves-light btn-flat red darken-2 white-text"> Update </button>
	    		</div>
			</Form>
		)
	}
}

const validate = (values, props) => {
  let errors = {};

  if (!values.firstName) {
    errors.firstName = 'Required!';
  } else if (values.firstName.length > 75) {
    errors.firstName = 'Must be less than 75 characters';
  } 

  if (!values.lastName) {
    errors.lastName = 'Required!';
  } else if (values.lastName.length > 75) {
    errors.lastName = 'Must be less than 75 characters';
  }


  if (values.newPassword && values.newPassword.length < 6) {
    errors.newPassword = 'Must be at least 6 characters';
  } else if (values.newPassword && values.newPassword.length > 150) {
    errors.newPassword = 'Must be less than 150 characters';
  }

  if (values.confirmNewPassword !== values.newPassword) {
    errors.confirmNewPassword = 'Password mismatch!';
  }

  return errors;
};

const FormikSettingsForm = withFormik({
	mapPropsToValues(props) {
		const {currentUser} = props;
		return {
			firstName: currentUser && currentUser.firstName ? currentUser.firstName: 'John',
			lastName: currentUser && currentUser.lastName ? currentUser.lastName: 'Brown',
			email: currentUser && currentUser.email ? currentUser.email: 'jbrown@gmail.com',
			newPassword: '',
			confirmNewPassword: ''
		}
	},
	validate,
	handleSubmit(values, {props, resetForm, setSubmitting}) {
		props.onSubmitSettingsForm(values);
		setTimeout(() => {
			setSubmitting(false);
			resetForm();
		}, 1000);
	}
})(SettingsForm)

export default FormikSettingsForm;