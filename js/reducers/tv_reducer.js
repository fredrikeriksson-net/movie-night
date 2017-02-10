import * as types from "../constants/ActionTypes.js";

export default function (state = [], action) {
	switch (action.type) {
	case types.FETCH_POPULAR_TV:
		state.splice(0, state.length)
		return state.concat(action.payload.data.results);
	case types.FETCH_UPCOMING_TV:
		state.splice(0, state.length)
		return state.concat(action.payload.data.results);
	case types.FETCH_PLAYING_TV:
		state.splice(0, state.length)
		return state.concat(action.payload.data.results);
	case types.FETCH_TOPRATED_TV:
		state.splice(0, state.length)
		return state.concat(action.payload.data.results);
	case types.FETCH_SEARCH_RESULTS_TV:
		state.splice(0, state.length)
		return state.concat(action.payload.data.results);
	
	}
		return state;
}