import axios from 'axios';
import {
	FETCH_CURRENT_USER, 
	LOGOUT,
	FETCH_TOP_FIVE_HIGHLY_RATED_REVIEWS
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