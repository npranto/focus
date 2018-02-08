import { 
    FETCH_CURRENT_USER,
    SIGN_IN_USER_WITH_EMAIL_AND_PASSWORD 
} from './../actions/types';
import cloneDeep from 'lodash.clonedeep';

const authReducer = (state = {isAuthenticated: false, currentUser: null, displayEnabled: false, signInStatus: { signInMessage: null, signInAttempted: false}}, action) => {
    switch (action.type) {
        case FETCH_CURRENT_USER: {
            return {
                ...state,
                isAuthenticated: (action.payload.data && action.payload.data._id) ? true : false,
                currentUser: action.payload.data,
                displayEnabled: true
            }
        }
        case SIGN_IN_USER_WITH_EMAIL_AND_PASSWORD: {
            let status = action.payload.data;
            if (status && (status.success === false)) {
                let copy = cloneDeep(state);
                copy.signInStatus = {
                    signInMessage: status.message,
                    signInAttempted: true
                }
                return copy;
            };
            if (status && status.success) {
                let copy = cloneDeep(state);
                copy.signInStatus = {
                    signInMessage: null,
                    signInAttempted: true
                };
                return copy;
            };
        }
        default: {
            return state;
        }
    }
}

export default authReducer;