import axios from 'axios';

import { FETCH_CURRENT_USER } from './types';

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
		
	}
}
