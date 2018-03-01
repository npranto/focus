import axios from 'axios';
import qs from 'qs';
import {
	FETCH_CURRENT_USER, 
	LOGOUT,
	FETCH_TOP_FIVE_HIGHLY_RATED_REVIEWS,
	SHOW_SIGN_IN_ERROR_MESSAGE
} from './types.js';

export const fetchCurrentUser = () => {
	return async (dispatch, getState) => {
		const currentUser = await axios.get('/auth/currentUser');
		console.log("currentUser", currentUser);
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

export const fetchTopFiveHighlyRatedReviews = () => {
	return async (dispatch, getState) => {
		const topFiveHighlyRatedReviews = await axios.get('/api/reviews/random');
		console.log("topFiveHighlyRatedReviews", topFiveHighlyRatedReviews);
		dispatch({
			type: FETCH_TOP_FIVE_HIGHLY_RATED_REVIEWS,
			payload: topFiveHighlyRatedReviews.data.data
		})
	}
}

export const loginWithEmailAndPassword = (form) => {
	return async (dispatch, getState) => {
		const loginStatus = await axios.post('/auth/local', qs.stringify(form));
		console.log(loginStatus);
		if (loginStatus.data && loginStatus.data.success) {
			dispatch({
				type: FETCH_CURRENT_USER,
				payload: loginStatus.data.data
			})
		} 
		if (loginStatus.data && (loginStatus.data.success === false)) {
			dispatch({
				type: SHOW_SIGN_IN_ERROR_MESSAGE,
				payload: loginStatus.data.message
			})	
		}
	}
}

