import defaultStore from './defaultStore.js';
import {
	FETCH_TOP_FIVE_HIGHLY_RATED_REVIEWS,
	SHOW_SIGN_IN_ERROR_MESSAGE,
	SHOW_UPLOAD_PROFILE_PICTURE_PREVIEW,
	SHOW_UPLOAD_PROFILE_PICTURE_ERROR_MESSAGE,
	SHOW_SIGN_UP_ERROR_MESSAGE,
	REMOVE_PROFILE_PICTURE_DURING_SIGN_UP,
	GET_ALL_TASKS_BY_CURRENT_USER,
	UPDATE_LEVEL_OF_IMPORTANCE,
	UPDATE_DURATION_HOUR,
	UPDATE_DURATION_MINUTE,
	UPDATE_START_TIME,
	CHANGE_TASK_VIEW_MODE,
	SET_EDITING_TASK,
	SET_AS_CURRENT_TASK,
	TRANSITIONING_FROM_STEP
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
		case UPDATE_LEVEL_OF_IMPORTANCE: {
			let copy = cloneDeep(state);
			copy.createTask.selectedLevelOfImportance = action.payload;
			return copy;
		}
		case UPDATE_DURATION_HOUR: {
			let copy = cloneDeep(state);
			copy.createTask.duration.hour.hourSelected = action.payload;
			return copy;
		}
		case UPDATE_DURATION_MINUTE: {
			let copy = cloneDeep(state);
			copy.createTask.duration.minute.minuteSelected = action.payload;
			return copy;
		}
		case UPDATE_START_TIME: {
			let copy = cloneDeep(state);
			copy.createTask.startTime = action.payload;
			return copy;
		} 
		case CHANGE_TASK_VIEW_MODE: {
			let copy = cloneDeep(state);
			copy.taskBoard.viewModes = action.payload;
			return copy;
		}
		case SET_EDITING_TASK: {
			let copy = cloneDeep(state);
			copy.dashboard.editingTask.selectedTaskForEdit = action.payload;
			return copy;
		}
		case SET_AS_CURRENT_TASK: {
			let copy = cloneDeep(state);
			copy.dashboard.currentTask = action.payload;
			return copy;
		}
		case TRANSITIONING_FROM_STEP: {
			let copy = cloneDeep(state);
			copy.forgetPassword = action.payload;
			return copy;
		}
	}
	return state;
}

export default componentsReducer;

