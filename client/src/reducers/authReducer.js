import {FETCH_CURRENT_USER} from './../actions/types';

const authReducer = (state = {currentUser: null, isAuthenticated: false}, action) => {
	switch (action.type) {
		case FETCH_CURRENT_USER: {
			return {
				currentUser: action.payload,
				isAuthenticated: true
			}
		}
		default: {
			return state;
		};
	}
}

export default authReducer;