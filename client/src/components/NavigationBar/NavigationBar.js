import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import FaAngleDown from 'react-icons/lib/fa/angle-down';
import $ from 'jquery';

import * as actionCreators from './../../actions';
import UserIcon from './../../assets/user-icon.png';
import './NavigationBar.css';

class NavigationBar extends Component {

	componentWillUpdate() {
		$('.dropdown-button').dropdown({
	      inDuration: 300,
	      outDuration: 225,
	      constrainWidth: false, // Does not change width of dropdown to that of the activator
	      hover: false, // Activate on hover
	      gutter: 0, // Spacing from edge
	      belowOrigin: true, // Displays dropdown below the button
	      alignment: 'center', // Displays dropdown with edge aligned to the left of button
	      stopPropagation: false // Stops event propagation
	    });
	}

	renderNotAuthenticatedTabs() {
		return (
			<ul className="nav-tabs">
				<li className="tab">
					<a href="/#features" className="animated-link"> Features </a>
				</li>
				<li className="tab">
					<a href="/#reviews" className="animated-link"> Reviews </a>
				</li>
				<li className="tab">
					<Link to="/sign-in" className="waves-effect waves-light btn white-text"> Get Started! </Link>
				</li>
				<li className="tab">
					<a className='dropdown-button' href='#' data-activates='notAuthenticatedTabsDropdown'>
						<FaAngleDown size={32}/>
					</a>
					<ul id='notAuthenticatedTabsDropdown' className='dropdown-content'>
					    <li>
					    	<a href="/#features" className="animated-link center-align"> Features </a>
					    </li>
					    <li>
					    	<a href="/#reviews" className="animated-link center-align"> Reviews </a>
					    </li>
					    <li>
							<Link to="/sign-in" className="animated-link center-align green-text"> Get Started! </Link>
						</li>
				  </ul>
				</li>
			</ul>
		)
	}

	renderAuthenticatedTabs() {
		return (
			<ul className="nav-tabs">
				<li className="tab">
					<div className="profile-tab valign-wrapper">
						<p className="name valign-wrapper"> Nazmuz Shakib Pranto </p>
						<a className="avatar valign-wrapper dropdown-button" href='#' data-activates='authenticatedTabsDropdown'> 
							<img src={UserIcon} alt="Profile Avatar"/>
						</a>
						<ul id='authenticatedTabsDropdown' className='dropdown-content'>
						    <li>
						    	<Link to="/users/:userId/dashboard" className="animated-link center-align"> Dashboard </Link>
						    </li>
						    <li>
						    	<Link to="/users/:userId/settings" className="animated-link center-align"> Settings </Link>
						    </li>
						    <li>
						    	<Link to="/users/:userId/give-feedback" className="animated-link center-align"> Give Feedback </Link>
						    </li>
						    <li>
								<a onClick={this.props.logout} className="animated-link center-align red-text"> Logout </a>
							</li>
					  	</ul>
					</div>
				</li>
				<li className="tab">
					<a className='dropdown-button' href='#' data-activates='authenticatedTabsDropdown'>
						<FaAngleDown size={32}/>
					</a>
					<ul id='authenticatedTabsDropdown' className='dropdown-content'>
					    <li>
					    	<Link to="/users/:userId/dashboard" className="animated-link center-align"> Dashboard </Link>
					    </li>
					    <li>
					    	<Link to="/users/:userId/settings" className="animated-link center-align"> Settings </Link>
					    </li>
					    <li>
							<Link to="/users/:userId/give-feedback" className="animated-link center-align"> Give Feedback </Link>
						</li>
						<li>
							<a onClick={this.props.logout} className="animated-link center-align red-text"> Logout </a>
						</li>
				  </ul>
				</li>
			</ul>
		)
	}
	
	render() {
		return (
			<div className="navigation-bar">
				<div className="name">
					<h4> Focus </h4>
				</div>
				{
					this.props.auth.isAuthenticated 
						? this.renderAuthenticatedTabs()
						: this.renderNotAuthenticatedTabs()
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

export default connect(mapStateToProps, actionCreators)(NavigationBar);
