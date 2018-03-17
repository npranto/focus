import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MdCheck from 'react-icons/lib/md/check';

import './LetsSignInInForgetPassword.css';

class LetsSignInInForgetPassword extends Component {
	render() {
		return (
			<div className="lets-sign-in-in-forget-password">
				<div className="password-reset-status row">
					<p className="flow-text"> 
						<MdCheck size={32} className="success-icon" />
						Success, your password has been updated! 
					</p>
				</div>
				<div className="row">
		        	<div className="col s12 m6 l4">
		        		<Link to="/sign-in" className="waves-effect waves-light btn-flat red darken-2 white-text"> Let's Sign In </Link>
		    		</div>
		    	</div>
			</div>
		)
	}
}

export default LetsSignInInForgetPassword;

