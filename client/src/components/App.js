import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as actions from '../actions/index';
import NavigationBar from './NavigationBar/NavigationBar';
import Landing from './Landing/Landing';
import SignIn from './SignIn/SignIn';
import './App.css';

class App extends Component {

    componentDidMount() {
        this.props.fetchCurrentUser();
    }

    render() {
        return (
            <div className="app-component">
                <Router>
                    <main>
                        <NavigationBar />
                        <section className="routes">
                            <Route exact path={'/'} component={Landing} />
                            <Route path={'/signin'} component={SignIn} />
                        </section>
                    </main>
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
