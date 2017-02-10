import * as types from "../constants/ActionTypes.js";

export default function (state = [], action) {
	switch (action.type) {
	case types.FETCH_MOVIE_DETAILS:
		state.splice(0, state.length)
		return state.concat(action.payload.data);

		default: {
			return state;
		}
	}
}