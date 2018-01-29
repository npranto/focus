import { COOL_INDEX } from './../actions/types';

const indexReducer = (state='', action) => {
	switch(action.type) {
		case COOL_INDEX: {
			return action.payload;
		}
		default: {
			return 'Default Index';
		}
	}
}

export default indexReducer;