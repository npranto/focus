import React, {Component} from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import FaAngleDown from 'react-icons/lib/fa/angle-down';

import './NavigationBar.css';

class NavigationBar extends Component {

    constructor(props) {
        super(props);
    }

    componentWillUpdate() {
        this.initializeSideNav();
        $( document ).ready(function(){
            $('.dropdown-button').dropdown({
                inDuration: 300,
                outDuration: 225,
                constrainWidth: false, // Does not change width of dropdown to that of the activator
                hover: false, // Activate on hover
                gutter: 0, // Spacing from edge
                belowOrigin: true, // Displays dropdown below the button
                alignment: 'right', // Displays dropdown with edge aligned to the left of button
                stopPropagation: false // Stops event propagation
            });
        })

    }

    initializeSideNav() {
        $(".button-collapse").sideNav();
    }

    renderLoggedOutTabs(loggedOutTabs) {
        return loggedOutTabs.map((tab, index) => {
            return tab.isButton 
                ? <li key={index}> <a href="/" className="waves-effect waves-light blue white-text lighten-1 btn"> {tab.name} </a> </li>
                : <li key={index}> <a href="/"> {tab.name} </a> </li>
        })
    }

    renderLoggedInDropdownTabs(loggedInDropdownTabs) {
        return loggedInDropdownTabs.map((tab, index) => {
            return tab.isDanger 
                ? <li key={index}><a href="#!" className="red-text"> {tab.name} </a></li>
                : <li key={index}><a href="#!"> {tab.name} </a></li>
        })
    }

    render() {
        const tabs = {
            loggedIn: [
                {name: 'Profile'},
                {name: 'Settings'},
                {name: 'Logout', isDanger: true}
            ],
            loggedOut: [
                {name: 'Features'},
                {name: 'Reviews'},
                {name: 'Feedback'},
                {name: 'Get started', isButton: true},
            ]
        }

        return (
            <div className="navigation-bar-component">
                <ul id='dropdown1' className='dropdown-content'>
                    { this.renderLoggedInDropdownTabs(tabs.loggedIn) }
                </ul>
                <div className="logo">
                    <h4> Focus </h4>
                </div>
                {
                    this.props.auth.displayEnabled 
                        ? (
                            <div className="navigation-tabs">
                                <ul className="tab-list">
                                    { 
                                        this.props.auth.isAuthenticated
                                            ? (
                                                <li>
                                                    <div className="profile-tab">
                                                        <div className="profile-info">
                                                            <p className="profile-fullname"> Nazmuz Shakib Pranto </p>
                                                            <div className="profile-picture-container">
                                                              <img src="https://avatars2.githubusercontent.com/u/13524077?v=4" alt="Mini Profile Picture" />
                                                            </div>
                                                        </div>
                                                        <div className="dropdown-icon dropdown-button" data-activates='dropdown1'>
                                                            <FaAngleDown size={32}/>
                                                        </div>
                                                    </div>
                                                </li>        
                                            )
                                            : this.renderLoggedOutTabs(tabs.loggedOut)      
                                    }
                                    
                                </ul>
                            </div>        
                        ) 
                        : <span></span>
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

export default connect(mapStateToProps)(NavigationBar);
