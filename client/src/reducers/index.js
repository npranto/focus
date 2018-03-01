import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'

import authReducer from './authReducer';
import componentsReducer from './componentsReducer';

const reducers = combineReducers({
	components: componentsReducer,
	auth: authReducer,
	form: formReducer
})

export default reducers;