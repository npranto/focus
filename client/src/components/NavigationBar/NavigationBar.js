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
                }
            );
        })

    }

    // INITIAL LOADS
    initializeSideNav() {
        $(".button-collapse").sideNav();
    }

    render() {
        const tabs = {
            loggedIn: [
                {name: 'Profile'},
                {name: 'Settings'},
                {name: 'Logout'}
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
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li className="divider"></li>
                <li><a href="#!">three</a></li>
                <li><a href="#!"><i className="material-icons">view_module</i>four</a></li>
                <li><a href="#!"><i className="material-icons">cloud</i>five</a></li>
              </ul>
              <div className="logo">
                <h4> Focus </h4>
              </div>
              <div className="navigation-tabs">
                <ul className="tab-list">
                  {/*
                  <li> <a href="/"> Features </a> </li>
                  <li> <a href="/"> Reviews </a> </li>
                  <li> <a href="/"> Feedback </a> </li>
                  */}
                  <li> <a href="/" className="waves-effect waves-light blue white-text lighten-1 btn">Get Started!</a> </li>
                  <li>
                    <div className="profile-tab">
                      <div className="profile-info">
                        <p className="profile-fullname"> Nazmuz Shakib Pranto </p>
                        <div className="profile-picture-container">
                          <img src="https://avatars2.githubusercontent.com/u/13524077?v=4" alt="Mini Profile Picture" />
                        </div>
                      </div>
                      <div className="dropdown-icon">
                        <a className='dropdown-button' href='#' data-activates='dropdown1'>
                          <FaAngleDown size={32}/>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
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
