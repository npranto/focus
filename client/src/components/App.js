import React, {Component} from 'react';
import {connect} from 'react-redux';

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
      <main className="app">
        <header>
        	<NavigationBar />
        </header>
        <section>	
        	<View />
        </section>
      </main>
    );
  }

}

export default connect(null, actionsCreators)(App);
