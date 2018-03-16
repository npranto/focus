import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, withRouter, Redirect} from 'react-router-dom';

import Landing from './../Landing/Landing';
import SignIn from './../SignIn/SignIn';
import SignUp from './../SignUp/SignUp';
import TermsOfConditions from './../TermsOfConditions/TermsOfConditions';
import PrivacyPolicy from './../PrivacyPolicy/PrivacyPolicy';
import Dashboard from './../Dashboard/Dashboard';
import FormikSettings from './../Settings/Settings';
import './View.css';

const PublicRouteIf = (props) => {
	const {exact, path, auth, redirectTo, component: Component} = props;
	return (
		<Route exact={exact} path={path} render={(props) => {
			return (auth && auth.isAuthenticated) 
				? <Redirect to={redirectTo} /> 
				: <Component {...props} />
		}} />
	)
}

const ProtectedRouteIf = (props) => {
	const {exact, path, auth, redirectTo, component: Component } = props;
	return (
		<Route exact={exact} path={path} render={(props) => {
			return (auth && auth.isAuthenticated) 
				? <Component {...props} />
				: <Redirect to={redirectTo} /> 
		}} />
	)
}

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
				<PublicRouteIf 
					exact={true} 
					path="/" 
					auth={auth} 
					redirectTo={(auth && auth.currentUser) ? `/users/${auth.currentUser._id}/dashboard` : '/'} 
					component={Landing} />
				<PublicRouteIf 
					path="/sign-in" 
					auth={auth} 
					redirectTo={(auth && auth.currentUser) ? `/users/${auth.currentUser._id}/dashboard` : '/'} 
					component={SignIn} />
				<PublicRouteIf 
					path="/sign-up" 
					auth={auth} 
					redirectTo={(auth && auth.currentUser) ? `/users/${auth.currentUser._id}/dashboard` : '/'} 
					component={SignUp} />
				<Route path="/terms-of-conditions" component={TermsOfConditions} />
				<Route path="/privacy-policy" component={PrivacyPolicy} />
				<ProtectedRouteIf 
					path="/users/:userId/dashboard" 
					auth={auth} 
					redirectTo="/sign-in"
					component={Dashboard} />
				<ProtectedRouteIf 
					path="/users/:userId/settings" 
					auth={auth} 
					redirectTo="/sign-in"
					component={FormikSettings} />
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