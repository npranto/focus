import React, {Component} from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

import './NavigationBar.css';

class NavigationBar extends Component{

    constructor(props) {
        super(props);

        this.initializeSideNav();
    }

    // INITIAL LOADS
    initializeSideNav() {
        $(".button-collapse").sideNav();
    }

    // RENDERS
    renderTabs(tabs, isAuthenticated, currentUser) {
        if (isAuthenticated) {
            return (
                <li>
                    <a href="/">
                        <div className="profile-tab">
                            <img src={currentUser.profilePicture} alt="Mini Profile Picture"/>
                        </div>
                    </a>
                </li>
            )
        }
        return tabs.loggedOut.map((tab, index) => {
            return (tab.isButton)
                ? (<li key={index}><a className="waves-effect waves-light btn">{tab.name}</a></li>)
                : (<li key={index}><a href="/">{tab.name}</a></li>)
        })
    }

    render() {
        const tabs = {
            loggedIn: [
                { name: 'Profile' },
                { name: 'Settings' },
                { name: 'Logout' }
            ],
            loggedOut: [
                { name: 'Features' },
                { name: 'Reviews' },
                { name: 'Feedback' },
                { name: 'Get started', isButton: true },
            ]
        }



        return (
            <div className="navigation-bar-component">
                <nav>
                    <div className="nav-wrapper">
                        <a href="#!" className="brand-logo">Focus</a>
                        {
                            this.props.auth.displayEnabled
                                ? (
                                    <div className="navigation-tabs">
                                        <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                                        <ul className="right hide-on-med-and-down">
                                            { this.renderTabs(tabs, this.props.auth.isAuthenticated, this.props.auth.currentUser) }
                                        </ul>
                                        <ul className="side-nav" id="mobile-demo">
                                            { this.renderTabs(tabs, this.props.auth.isAuthenticated, this.props.auth.currentUser) }
                                        </ul>
                                    </div>
                                )
                                : <div></div>
                        }
                    </div>
                </nav>
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