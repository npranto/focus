import React, { Component } from 'react';

import NavigationBar from './NavigationBar/NavigationBar';
import View from './View/View';
import './App.css';

class App extends Component {

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

export default App;
