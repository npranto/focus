import React, {Component} from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";

import NavigationBar from './NavigationBar/NavigationBar';
import View from './View/View';
import * as actionsCreators from './../actions';
import './App.css';

class App extends Component {

	componentDidMount() {
		this.props.fetchCurrentUser();
	}

	render() {
		return (
			<Router>
				<main className="app">
					<header>
						<NavigationBar />
					</header>
					<section>	
						<View />
					</section>
				</main>
			</Router>
			
		);
	}

}

export default connect(null, actionsCreators)(App);
