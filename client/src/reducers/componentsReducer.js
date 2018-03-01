import defaultStore from './defaultStore.js';
import {
	FETCH_TOP_FIVE_HIGHLY_RATED_REVIEWS,
	SHOW_SIGN_IN_ERROR_MESSAGE
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
	}
	return state;
}

export default componentsReducer;

