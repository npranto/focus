import React, {Component} from 'react';
import $ from 'jquery';
import {connect} from 'react-redux';
import {withFormik, Form, Field} from 'formik';
import axios from 'axios';

import * as actionCreators from './../../actions';
import FormikSettingsForm from './../SettingsForm/SettingsForm';
import './Settings.css';

class Settings extends Component {
	constructor(props) {
		super(props);

		$(document).ready(function(){
		    $('.delete-account-collapsible').collapsible();
	  	});
	}

	submitSettingsForm(values, userId) {
		let newProfile = {};
		if (values.firstName) {
			newProfile['firstName'] = values.firstName;
		}
		if (values.lastName) {
			newProfile['lastName'] = values.lastName;
		}
		if (values.newPassword) {
			newProfile['password'] = values.newPassword;
		}
		this.props.updateCurrentUserProfile(newProfile, userId);
	}

	render() {
		const {values, touched, errors, isValid} = this.props;
		const {currentUser} = this.props.auth;

		return (
			<div className="settings">
				<h3> Settings </h3>
				<div className="settings-form-container">
					{
						currentUser
							? <FormikSettingsForm currentUser={currentUser} onSubmitSettingsForm={(values) => this.submitSettingsForm(values, currentUser._id)}/>
							: ""
					}
				</div>
				<br />
				<div className="delete-account">
					<ul className="collapsible delete-account-collapsible" data-collapsible="accordion">
						<li>
							<div className="collapsible-header active"><i className="material-icons red-text">delete</i> Delete Account Forever </div>
							<div className="collapsible-body grey lighten-4">
								<Form>
									<div className="row">
								        <div className="input-field col s12 m6 l4">
								            <Field 
								            	name="password"
								            	placeholder="" 
								            	id="password" 
								            	type="password"
								            	value={values.password} />
								            <label htmlFor="password"> Password </label>
								        	<p className="red-text right-align"><sup> {(touched && touched.password && errors && errors.password) ? errors.password : ''} </sup></p>
								        </div>
							        </div>
							        <div className="row">
							        	<div className="col s12 m6 l4">
							        		<button type="submit" disabled={!isValid} className="waves-effect waves-light btn-flat red darken-2 white-text"> Delete account </button>
							    		</div>
							    	</div>
							    </Form>
							</div>
						</li>
					</ul>
				</div>				
			</div>
		)
	}
}

const validate = (values) => {
	let errors = {};

	if (!values.password) {
		errors.password = 'Required!';
	} else if (values.password.length < 6) {
		errors.password = 'Must be greaters than 6 characters';
	} else if (values.password.length > 75) {
		errors.password = 'Must be less than 75 characters';
	}

	return errors;
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth
	}
}

const FormikSettings = withFormik({
	mapPropsToValues(props) {
		return {
			password: ''
		}
	},
	validate,
	async handleSubmit(values, {props, resetForm, setErrors}) {
		const checkPasswordStatus = await axios.post(`/api/users/${props.auth.currentUser._id}/checkPassword`, values);
		if (!checkPasswordStatus.data.success) {
			setErrors({
				password: checkPasswordStatus.data.message
			})
		}
		if (checkPasswordStatus.data.success) {
			const deletedUser = await axios.delete(`/api/users/${props.auth.currentUser._id}`);
			if (!deletedUser.data.success) {
				setErrors({
					password: deletedUser.data.message
				})
			}
			if (deletedUser.data.success) {
				props.logout();
			}
		}
	}
})(Settings)

export default connect(mapStateToProps, actionCreators)(FormikSettings);

