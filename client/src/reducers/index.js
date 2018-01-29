import { combineReducers } from 'redux';
import indexReducer from './indexReducer';

const reducers = combineReducers({
	index: indexReducer
})

export default reducers;