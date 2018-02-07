import axios from 'axios';
import qs from 'qs';

import { 
	FETCH_CURRENT_USER, 
	SIGN_IN_USER_WITH_EMAIL_AND_PASSWORD 
} from './types';

export const fetchCurrentUser = () => {
	return async (dispatch, getState) => {
        const currentUser = await axios.get('/auth/currentUser');
        console.log(currentUser);
		dispatch({
			type: FETCH_CURRENT_USER,
			payload: currentUser
		})
	}
}

export const signInUserWithEmailAndPassword = (form) => {
	return async (dispatch, getState) => {
		let signedInStatus = await axios.post('/auth/local', qs.stringify(form));
		const currentUser = await axios.get('/auth/currentUser');
		dispatch({
			type: FETCH_CURRENT_USER,
			payload: currentUser
		})
		dispatch({
			type: SIGN_IN_USER_WITH_EMAIL_AND_PASSWORD,
			payload: signedInStatus
		})
	}
}

