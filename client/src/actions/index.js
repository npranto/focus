import { COOL_INDEX } from './types';

export const changeTitle = () => {
	return (dispatch, getState) => {
		dispatch({
			type: COOL_INDEX,
			payload: 'Cool Index'
		})
	}
}
