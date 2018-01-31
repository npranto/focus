import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';

import reducers from './reducers';
import './index.css';
import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, {}, applyMiddleware(logger, thunk));
ReactDOM.render(
	<Provider store={store}> 
		<App />
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();
