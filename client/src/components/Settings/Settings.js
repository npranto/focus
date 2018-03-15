import React, {Component} from 'react';
import $ from 'jquery';
import {connect} from 'react-redux';

import SettingsForm from './../SettingsForm/SettingsForm';
import './Settings.css';

class Settings extends Component {
	constructor(props) {
		super(props);

		$(document).ready(function(){
		    $('.delete-account-collapsible').collapsible();
	  	});
	}

	render() {
		const {currentUser} = this.props.auth;
		return (
			<div className="settings">
				<h3> Settings </h3>
				<div className="settings-form-container">
					<SettingsForm currentUser={currentUser} />
				</div>
				<div className="delete-account">
					<ul className="collapsible delete-account-collapsible" data-collapsible="accordion">
						<li>
							<div className="collapsible-header"><i className="material-icons red-text">delete</i> Delete Account Forever </div>
							<div className="collapsible-body grey lighten-4">
								<form>
									<div className="row">
								        <div className="input-field col s12 m6 l4">
								            <input placeholder="" id="password" type="password" />
								            <label htmlFor="password"> Password </label>
								        	<p className="red-text right-align"><sup> Required! </sup></p>
								        </div>
							        </div>
							        <div className="row">
							        	<div className="col s12 m6 l4">
							        		<button type="submit" className="waves-effect waves-light btn-flat red darken-2 white-text"> Delete account </button>
							    		</div>
							    	</div>
							    </form>
							</div>
						</li>
					</ul>
				</div>				
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth
	}
}

export default connect(mapStateToProps)(Settings);

