import { FETCH_CURRENT_USER } from './../actions/types';

const authReducer = (state = {isAuthenticated: false, currentUser: null, displayEnabled: false}, action) => {
    switch (action.type) {
        case FETCH_CURRENT_USER: {
            return {
                isAuthenticated: (action.payload.data && action.payload.data._id) ? true : false,
                currentUser: action.payload.data,
                displayEnabled: true
            }
        }
        default: {
            return state;
        }
    }
}

export default authReducer;