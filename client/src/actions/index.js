import axios from 'axios';
import {FETCH_CURRENT_USER, LOGOUT} from './types.js';

export const fetchCurrentUser = () => {
	return async (dispatch, getState) => {
		const currentUser = await axios.get('/auth/currentUser');
		console.log(currentUser);
		dispatch({
			type: FETCH_CURRENT_USER,
			payload: currentUser.data
		})
	}
}

export const logout = () => {
	return async (dispatch, getState) => {
		const logout = await axios.get('/auth/logout');
		dispatch({
			type: LOGOUT,
			payload: {
				currentUser: null,
				isAuthenticated: false
			}
		})
	}
}