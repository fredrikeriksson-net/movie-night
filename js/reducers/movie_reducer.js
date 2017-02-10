import * as types from "../constants/ActionTypes.js";

export default function (state = [], action) {
	
	switch (action.type) {
	case types.FETCH_POPULAR_MOVIES:
		state.splice(0, state.length)
		return state.concat(action.payload.data.results);
	case types.FETCH_UPCOMING_MOVIES:
		state.splice(0, state.length)
		return state.concat(action.payload.data.results);
	case types.FETCH_PLAYING_MOVIES:
		state.splice(0, state.length)
		return state.concat(action.payload.data.results);
	case types.FETCH_TOPRATED_MOVIES:
		state.splice(0, state.length)
		return state.concat(action.payload.data.results);
	case types.FETCH_SEARCH_RESULTS:
		state.splice(0, state.length)
		return state.concat(action.payload.data.results);
	}

		return state;
}