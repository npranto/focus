import React, {Component} from 'react';
import $ from 'jquery'

import './Settings.css';

class Settings extends Component {
	constructor(props) {
		super(props);

		$(document).ready(function(){
		    $('.collapsible').collapsible();
	  	});
	}

	render() {
		return (
			<div className="settings">
				<h4> Settings </h4>
				<div className="divider"></div>
				<div className="settings-form-container">
					Settings Form
				</div>
				<div className="delete-account">
					<ul className="collapsible" data-collapsible="accordion">
						<li>
							<div className="collapsible-header active"><i className="material-icons">filter_drama</i> Delete Account Forever </div>
							<div className="collapsible-body grey lighten-4">
								<form>
									<div className="row">
								        <div class="input-field col s12 m6 l4">
								            <input placeholder="" id="password" type="password" />
								            <label htmlFor="password"> Password </label>
								        	<p className="red-text right-align"><sup> Required! </sup></p>
								        </div>
							        </div>
							        <div className="row">
							        	<div class="col s12 m6 l4">
							        		<button type="submit" className="waves-effect waves-light btn-flat red accent-2 white-text"> Delete account </button>
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

export default Settings;