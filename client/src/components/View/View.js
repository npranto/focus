import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';

import Landing from './../Landing/Landing';
import SignIn from './../SignIn/SignIn';
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
			</div>
		)
	}

}

const mapStateToProps = (state) => {
	return {
		auth: state.auth
	}
}

export default connect(mapStateToProps)(View);