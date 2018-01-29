import { FETCH_CURRENT_USER } from './../actions/types';

const authReducer = (state = {isAuthenticated: false, currentUser: null}, action) => {
    switch (action.type) {
        case FETCH_CURRENT_USER: {
            return {
                isAuthenticated: action.payload.data ? true : false,
                currentUser: action.payload.data
            }
        }
        default: {
            return state;
        }
    }
}

export default authReducer;