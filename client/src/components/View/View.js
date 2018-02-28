import React, {Component} from 'react';
import {connect} from 'react-redux';

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