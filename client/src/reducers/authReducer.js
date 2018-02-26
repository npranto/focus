import {FETCH_CURRENT_USER, LOGOUT} from './../actions/types';

const authReducer = (state = {currentUser: null, isAuthenticated: false}, action) => {
	switch (action.type) {
		case FETCH_CURRENT_USER: {
			return {
				currentUser: action.payload,
				isAuthenticated: action.payload ? true : false
			}
		}
		case LOGOUT: {
			return {
				...action.payload
			}
		}
		default: {
			return state;
		};
	}
}

export default authReducer;