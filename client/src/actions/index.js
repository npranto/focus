import axios from 'axios';
import qs from 'qs';
import {
	FETCH_CURRENT_USER, 
	LOGOUT,
	FETCH_TOP_FIVE_HIGHLY_RATED_REVIEWS,
	SHOW_SIGN_IN_ERROR_MESSAGE,
	SHOW_UPLOAD_PROFILE_PICTURE_PREVIEW,
	SHOW_UPLOAD_PROFILE_PICTURE_ERROR_MESSAGE,
	SHOW_SIGN_UP_ERROR_MESSAGE,
	REMOVE_PROFILE_PICTURE_DURING_SIGN_UP,
	GET_ALL_TASKS_BY_CURRENT_USER,
	UPDATE_LEVEL_OF_IMPORTANCE,
	UPDATE_DURATION_HOUR,
	UPDATE_DURATION_MINUTE
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

export const uploadProfilePicture = (profilePictureInfo) => {
	return async (dispatch, getState) => {
		const form = new FormData();
		form.set('profilePicture', profilePictureInfo);
		const profilePictureUploaded = await axios({
			method: 'POST',
			url: '/api/uploads/profilePicture',
			data: form,
			config: { headers: {'Content-Type': 'multipart/form-data' }}
		})
		profilePictureUploaded.data && profilePictureUploaded.data.success 
			? (
				dispatch({
					type: SHOW_UPLOAD_PROFILE_PICTURE_PREVIEW,
					payload: profilePictureUploaded.data.data
				})
			)
			: (
				dispatch({
					type: SHOW_UPLOAD_PROFILE_PICTURE_ERROR_MESSAGE,
					payload: profilePictureUploaded.data.message
				})
			)
	}
	
}

export const signUpNewUser = (form) => {
	console.log(form);
	return async (dispatch, getState) => {
		const newUser = await axios.post('/api/users', form);
		if (newUser.data.success) {
			dispatch({
				type: FETCH_CURRENT_USER,
				payload: newUser.data.data
			})
		}
		if (!newUser.data.success) {
			dispatch({
				type: SHOW_SIGN_UP_ERROR_MESSAGE,
				payload: newUser.data.message
			})
		}
	}
}

export const removeProfilePicture = () => {
	return (dispatch, getState) => {
		dispatch({
			type: REMOVE_PROFILE_PICTURE_DURING_SIGN_UP,
			payload: null
		})
	}
}

export const getAllTasksByCurrentUser = (userId) => {
	return async (dispatch, getState) => {
		const tasksByCurrentUser = await axios.get('/api/tasks', {createdBy: userId})
		console.log(tasksByCurrentUser);
		if (tasksByCurrentUser.data.success) {
			dispatch({
				type: GET_ALL_TASKS_BY_CURRENT_USER,
				payload: tasksByCurrentUser.data.data
			})
		}
		
	}
}

export const updateLevelOfImportance = (value, levelOfImportance) => {
	return (dispatch, getState) => {
		const selectedLevelOfImportance = levelOfImportance.find(level => level.value == value);
		dispatch({
			type: UPDATE_LEVEL_OF_IMPORTANCE,
			payload: selectedLevelOfImportance
		})
	}
}

export const updateDurationHour = (value, hours) => {
	return (dispatch, getState) => {
		const selectedHour = hours.find(hour => hour == value);
		dispatch({
			type: UPDATE_DURATION_HOUR,
			payload: selectedHour
		})
	}
}

export const updateDurationMinute = (value, minutes) => {
	return (dispatch, getState) => {
		const selectedMinute = minutes.find(minute => minute == value);
		dispatch({
			type: UPDATE_DURATION_MINUTE,
			payload: selectedMinute
		})
	}
}



