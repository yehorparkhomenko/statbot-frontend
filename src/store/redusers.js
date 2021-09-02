import { CHANGE_DATE } from "./actions";
import moment from 'moment';

export const initialState = {
		startDate: moment().subtract(7, 'days'),
		endDate: moment()
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_DATE:

			return {
				...state,
				startDate: action.startDate,
				endDate: action.endDate
			}
		default:
			return state;
    }
}

