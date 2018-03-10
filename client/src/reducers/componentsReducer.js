import defaultStore from './defaultStore.js';
import {
	FETCH_TOP_FIVE_HIGHLY_RATED_REVIEWS,
	SHOW_SIGN_IN_ERROR_MESSAGE,
	SHOW_UPLOAD_PROFILE_PICTURE_PREVIEW,
	SHOW_UPLOAD_PROFILE_PICTURE_ERROR_MESSAGE,
	SHOW_SIGN_UP_ERROR_MESSAGE,
	REMOVE_PROFILE_PICTURE_DURING_SIGN_UP,
	GET_ALL_TASKS_BY_CURRENT_USER
} from './../actions/types.js';
import cloneDeep from 'lodash.clonedeep';

const componentsReducer = (state = defaultStore.components, action) => {
	switch (action.type) {
		case FETCH_TOP_FIVE_HIGHLY_RATED_REVIEWS: {
			let copy = cloneDeep(state);
			copy.landing.reviews = [...action.payload];
			return copy;
		}
		case SHOW_SIGN_IN_ERROR_MESSAGE: {
			let copy = cloneDeep(state);
			copy.signInForm.signInError = action.payload;
			return copy;
		}
		case SHOW_UPLOAD_PROFILE_PICTURE_ERROR_MESSAGE: {
			let copy = cloneDeep(state);
			copy.signUpForm.profilePictureUploadError = action.payload;
			return copy;
		}
		case SHOW_UPLOAD_PROFILE_PICTURE_PREVIEW: {
			let copy = cloneDeep(state);
			copy.signUpForm.profilePicture = action.payload;
			copy.signUpForm.profilePictureUploadError = null;
			return copy;
		}
		case SHOW_SIGN_UP_ERROR_MESSAGE: {
			let copy = cloneDeep(state);
			copy.signUpForm.signUpError = action.payload;
			return copy;
		}
		case REMOVE_PROFILE_PICTURE_DURING_SIGN_UP: {
			let copy = cloneDeep(state);
			copy.signUpForm.profilePicture = action.payload;
			return copy;
		}
		case GET_ALL_TASKS_BY_CURRENT_USER: {
			let copy = cloneDeep(state);
			copy.dashboard.tasks = [...action.payload];
			return copy;
		}
	}
	return state;
}

export default componentsReducer;

