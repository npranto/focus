import React, {Component} from 'react';
import FaUserSecret from 'react-icons/lib/fa/user-secret';
import $ from 'jquery';
import {withFormik} from 'formik';

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
		const {currentUser, values, handleChange, handleSubmit} = this.props;
		console.log(currentUser);

		return (
			<form id="settingsForm" onSubmit={handleSubmit}>
				<ul className="collapsible settings-form-collapsible" data-collapsible="accordion">
					<li>
						<div className="collapsible-header active"><i className="material-icons blue-text">person</i> Personal Information </div>
						<div className="collapsible-body grey lighten-4">
							<div className="row">
							        <div className="input-field col s12 m6 l6">
							            <input 
							            	placeholder="" 
							            	id="firstName" 
							            	type="text" 
							            	value={values.firstName}
							            	onChange={handleChange} />
							            <label htmlFor="firstName"> First Name </label>
							        	<p className="red-text right-align"><sup> Required! </sup></p>
							        </div>
							        <div className="input-field col s12 m6 l6">
							            <input 
							            	placeholder="" 
							            	id="lastName" 
							            	type="text"
							            	value={values.lastName}
							            	onChange={handleChange} />
							            <label htmlFor="lastName"> Last Name </label>
							        	<p className="red-text right-align"><sup> Required! </sup></p>
							        </div>
							        <div className="input-field col s12 m12 l12">
							            <input 
							            	disabled 
							            	placeholder="" 
							            	value={values.email} 
							            	id="email" 
							            	type="email" />
							            <label htmlFor="email"> Email </label>
							        	<p className="red-text right-align"><sup> Required! </sup></p>
							        </div>
						        
						    </div>
						</div>
					</li>

					<li>
						<div className="collapsible-header"><i className="material-icons green-text">credit_card</i> Credentials </div>
						<div className="collapsible-body grey lighten-4">
							<div className="row">
						        <div className="input-field col s12 m6 l6">
						            <input placeholder="" id="newPassword" type="password" />
						            <label htmlFor="newPassword"> New Password </label>
						        	<p className="red-text right-align"><sup> Required! </sup></p>
						        </div>
						        <div className="input-field col s12 m6 l6">
						            <input placeholder="" id="confirmNewPassword" type="password" />
						            <label htmlFor="confirmNewPassword"> Confirm New Password </label>
						        	<p className="red-text right-align"><sup> Required! </sup></p>
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
	        		<button type="submit" className="waves-effect waves-light btn-flat red darken-2 white-text"> Update </button>
	    		</div>
			</form>
		)
	}
}

const FormikSettingsForm = withFormik({
	mapPropsToValues(props) {
		const {currentUser} = props;
		return {
			firstName: currentUser && currentUser.firstName ? currentUser.firstName: 'John',
			lastName: currentUser && currentUser.lastName ? currentUser.lastName: 'Brown',
			email: currentUser && currentUser.email ? currentUser.email: 'jbrown@gmail.com',
		}
	},
	handleSubmit(values) {
		console.log(values);
	}
})(SettingsForm)

export default FormikSettingsForm;