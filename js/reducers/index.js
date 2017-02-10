import { combineReducers } from 'redux';
import movieReducer from './movie_reducer'
import tvReducer from './tv_reducer'
import movieDetailsReducer from './movie_details_reducer'
import tvDetailsReducer from './tv_details_reducer'


const rootReducer = combineReducers({
  movies: movieReducer,
  tv: tvReducer,
  movieDetails: movieDetailsReducer,
  tvDetails: tvDetailsReducer,
});

export default rootReducer;