import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  changeTitle() {
      this.props.changeTitle();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> {this.props.index} </h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> {this.props.title}.
        </p>
        <button onClick={this.changeTitle}>
          Update
        </button>

        <button onClick={this.changeIntro}>
          Update
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    index: state.index
  }
}

export default connect(mapStateToProps, actions)(App);
