import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import FaAngleDown from 'react-icons/lib/fa/angle-down';
import $ from 'jquery';
import Media from 'react-media';

import * as actionCreators from './../../actions';
import UserIcon from './../../assets/user-icon.png';
import './NavigationBar.css';

class NavigationBar extends Component {

	componentWillUpdate() {
		$(document).ready(function(){
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
	    })
	}

	renderNotAuthenticatedTabs() {
		return (
			<ul className="nav-tabs">
				<Media query="(min-width: 500px)">
		          {matches => 
		          		matches
		          			? (
		          				<li className="tab">
									<a href="/#features" className="animated-link"> Features </a>
								</li>
		          			)
		          			: ''
		          }
		        </Media>
		        <Media query="(min-width: 500px)">
		          {matches => 
		          		matches
		          			? (
		          				<li className="tab">
									<a href="/#reviews" className="animated-link"> Reviews </a>
								</li>
		          			)
		          			: ''
		          }
		        </Media>
		        <Media query="(min-width: 500px)">
		          {matches => 
		          		matches
		          			? (
		          				<li className="tab">
									<Link to="/sign-in" className="waves-effect waves-light btn white-text"> Get Started! </Link>
								</li>
		          			)
		          			: ''
		          }
		        </Media>
				<Media query="(max-width: 499px)">
		          {matches => 
		          		matches
		          			? (
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
		          			)
		          			: ''
		          }
		        </Media>
			</ul>
		)
	}

	renderAuthenticatedTabs(auth) {
		return (
			<ul className="nav-tabs">
				<Media query="(min-width: 500px)">
		          {matches => 
		          		matches
		          			? (
		          				<li className="tab">
									<div className="profile-tab valign-wrapper">
										<p className="name valign-wrapper"> {auth.currentUser.fullName} </p>
										<a className="avatar valign-wrapper dropdown-button" href='#' data-activates='authenticatedTabsDropdown'> 
											<img src={auth.currentUser.profilePicture ? auth.currentUser.profilePicture : UserIcon} alt="Profile Avatar"/>
										</a>
										<ul id='authenticatedTabsDropdown' className='dropdown-content'>
										    <li>
										    	<Link to={`/users/${auth.currentUser._id}/dashboard`} className="animated-link center-align"> Dashboard </Link>
										    </li>
										    <li>
										    	<Link to={`/users/${auth.currentUser._id}/settings`} className="animated-link center-align"> Settings </Link>
										    </li>
										    <li>
										    	<Link to={`/users/${auth.currentUser._id}/give-feedback`} className="animated-link center-align"> Give Feedback </Link>
										    </li>
										    <li>
												<a href="/auth/logout" className="animated-link center-align red-text"> Logout </a>
											</li>
									  	</ul>
									</div>
								</li>
		          			)
		          			: (
		          				<li className="tab">
									<a className='dropdown-button' href='#' data-activates='authenticatedTabsDropdown'>
										<FaAngleDown size={32}/>
									</a>
									<ul id='authenticatedTabsDropdown' className='dropdown-content'>
									    <li>
									    	<Link to={`/users/${auth.currentUser._id}/dashboard`} className="animated-link center-align"> Dashboard </Link>
									    </li>
									    <li>
									    	<Link to={`/users/${auth.currentUser._id}/settings`} className="animated-link center-align"> Settings </Link>
									    </li>
									    <li>
											<Link to={`/users/${auth.currentUser._idd}/give-feedback`} className="animated-link center-align"> Give Feedback </Link>
										</li>
										<li>
											<a href="/auth/logout" className="animated-link center-align red-text"> Logout </a>
										</li>
								  </ul>
								</li>
		          			)
		          }
		        </Media>
			</ul>
		)
	}
	
	render() {
		const {auth} = this.props;

		return (
			<div className="navigation-bar">
				<div className="name">
					<Link to={
						auth.isAuthenticated 
							? `/users/${auth.currentUser._id}/dashboard` 
							: '/'
					}>
						<h4> Focus </h4>
					</Link>
				</div>
				{
					auth.isAuthenticated 
						? this.renderAuthenticatedTabs(auth)
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
