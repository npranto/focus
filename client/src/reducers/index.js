import {combineReducers} from 'redux';
import authReducer from './authReducer';
import componentsReducer from './componentsReducer';

const reducers = combineReducers({
	components: componentsReducer,
	auth: authReducer
})

export default reducers;