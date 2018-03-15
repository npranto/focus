import React, {Component} from 'react';
import FaUserSecret from 'react-icons/lib/fa/user-secret';
import $ from 'jquery';

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
		const {currentUser} = this.props;

		return (
			<ul className="collapsible settings-form-collapsible" data-collapsible="accordion">
				<li>
					<div className="collapsible-header active"><i className="material-icons blue-text">person</i> Personal Information </div>
					<div className="collapsible-body grey lighten-4">
						<form className="row">
						        <div className="input-field col s12 m6 l6">
						            <input placeholder="" id="firstName" type="text" />
						            <label htmlFor="firstName"> First Name </label>
						        	<p className="red-text right-align"><sup> Required! </sup></p>
						        </div>
						        <div className="input-field col s12 m6 l6">
						            <input placeholder="" id="lastName" type="text" />
						            <label htmlFor="lastName"> Last Name </label>
						        	<p className="red-text right-align"><sup> Required! </sup></p>
						        </div>
						        <div className="input-field col s12 m12 l12">
						            <input disabled placeholder="" value="npranto@gmail.com" id="email" type="email" />
						            <label htmlFor="email"> Email </label>
						        	<p className="red-text right-align"><sup> Required! </sup></p>
						        </div>
					        <div className="row">
					        	<div className="col s12 m6 l4">
					        		<button type="submit" className="waves-effect waves-light btn-flat red darken-2 white-text"> Save </button>
					    		</div>
					    	</div>
					    </form>
					</div>
				</li>

				<li>
					<div className="collapsible-header"><i className="material-icons green-text">credit_card</i> Credentials </div>
					<div className="collapsible-body grey lighten-4">
						<form className="row">
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
					        <div className="row">
					        	<div className="col s12 m6 l4">
					        		<button type="submit" className="waves-effect waves-light btn-flat red darken-2 white-text"> Save </button>
					    		</div>
					    	</div>
					    </form>
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
		)
	}
}

export default SettingsForm;