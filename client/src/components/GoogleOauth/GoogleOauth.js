import React, {Component} from 'react';
import FaGooglePlus from 'react-icons/lib/fa/google-plus';

import './GoogleOauth.css';

class GoogleOauth extends Component {
	render() {
		return (
			<a href="/auth/google" className="google-oauth">
				<div className="just-go-with-google red darken-3">
					<div className="google-icon">
						<FaGooglePlus size={32} />
					</div>
					<p> Just go with Google </p>
				</div>
			</a>
		)
	}
}

export default GoogleOauth;