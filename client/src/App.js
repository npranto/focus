import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as actions from './actions';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    componentDidMount() {
        this.props.fetchCurrentUser();
    }

    render() {
        return (
            <div className="app">
                <Router>
                    <div className="routes">
                        {/*<NavigationBar />*/}
                        {/*<Route path={'/'} component={}/>*/}
                        {/*<Route path={'/'} component={}/>*/}
                    </div>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, actions)(App);
