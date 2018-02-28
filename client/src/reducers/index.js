import {combineReducers} from 'redux';
import authReducer from './authReducer';
import defaultStore from './defaultStore';

const reducers = combineReducers({
	auth: authReducer
})

export default reducers;