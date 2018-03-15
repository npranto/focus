import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import Landing from './../Landing/Landing';
import SignIn from './../SignIn/SignIn';
import SignUp from './../SignUp/SignUp';
import TermsOfConditions from './../TermsOfConditions/TermsOfConditions';
import PrivacyPolicy from './../PrivacyPolicy/PrivacyPolicy';
import Dashboard from './../Dashboard/Dashboard';
import Settings from './../Settings/Settings';
import './View.css';

class View extends Component {

	render() {
		const {auth} = this.props;
		
		return (
			<div className="view">
				{
					/*
						All routes for major components goes here...
						<Route path="" component={} />
					*/
				}
				<Route exact path="/" component={Landing} />
				<Route path="/sign-in" component={SignIn} />
				<Route path="/sign-up" component={SignUp} />
				<Route path="/terms-of-conditions" component={TermsOfConditions} />
				<Route path="/privacy-policy" component={PrivacyPolicy} />
				<Route path="/users/:userId/dashboard" component={Dashboard} />
				<Route path="/users/:userId/settings" component={Settings} />
			</div>
		)
	}

}

const mapStateToProps = (state) => {
	return {
		auth: state.auth
	}
}

export default withRouter(connect(mapStateToProps)(View));