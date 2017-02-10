// Reducers
import reducerMovies from "../js/reducers/movie_reducer.js";
import reducerMovieDetails from "../js/reducers/movie_details_reducer.js";

import reducerTv from "../js/reducers/tv_reducer.js";
import reducerTvDetails from "../js/reducers/tv_details_reducer.js";

//Action Constants
import * as types from "../js/constants/ActionTypes.js";


describe("Movie Reducer", () => {

	// Initial State Movie Overview
  it('should handle the initial Movie Overview state', () => {
    expect(reducerMovies(undefined, [])).toEqual([])
  })

 	// Initial State Movie Details
  it('should handle the initial Movie Details state', () => {
    expect(reducerMovieDetails(undefined, [])).toEqual([])
  })

	// Popular Movies
	it('should handle FETCH_POPULAR_MOVIES', () => {
   expect(reducerMovies([], {
   	type: types.FETCH_POPULAR_MOVIES, 
   		payload:{
   			data:{
   				results:[{title: "Some popular movie"}]
   			}
   		}
   	}
   )).toEqual([{title: "Some popular movie"}])
	})

	// Upcoming Movies
	it('should handle FETCH_UPCOMING_MOVIES', () => {
   expect(reducerMovies([], {
   	type: types.FETCH_UPCOMING_MOVIES, 
   		payload:{
   			data:{
   				results:[{title: "Some upcoming movie"}]
   			}
   		}
   	}
   )).toEqual([{title: "Some upcoming movie"}])
	})

	// Playing Now Movies
	it('should handle FETCH_PLAYING_MOVIES', () => {
   expect(reducerMovies([], {
   	type: types.FETCH_PLAYING_MOVIES, 
   		payload:{
   			data:{
   				results:[{title: "Some playing now movie"}]
   			}
   		}
   	}
   )).toEqual([{title: "Some playing now movie"}])
	})

	// Top Rated Movies
	it('should handle FETCH_TOPRATED_MOVIES', () => {
   expect(reducerMovies([], {
   	type: types.FETCH_TOPRATED_MOVIES, 
   		payload:{
   			data:{
   				results:[{title: "Some toprated movie"}]
   			}
   		}
   	}
   )).toEqual([{title: "Some toprated movie"}])
	})

	// Movie Details
	it('should handle FETCH_MOVIE_DETAILS', () => {
   expect(reducerMovieDetails([], {
   	type: types.FETCH_MOVIE_DETAILS, 
   		payload:{
   			data:{
   				title: "Some movie details"
   			}
   		}
   	}
   )).toEqual([{title: "Some movie details"}])
	})

	// Search Movies
	it('should handle FETCH_SEARCH_RESULTS', () => {
   expect(reducerMovies([], {
   	type: types.FETCH_SEARCH_RESULTS, 
   		payload:{
   			data:{
   				results:[{title: "Search movies"}]
   			}
   		}
   	}
   )).toEqual([{title: "Search movies"}])
	})

})


describe("TV Reducer", () => {

	// Initial State TV Overview
  it('should handle the initial TV Overview state', () => {
    expect(reducerTv(undefined, [])).toEqual([])
  })

 	// Initial State TV Details
  it('should handle the initial TV Details state', () => {
    expect(reducerTvDetails(undefined, [])).toEqual([])
  })

	// Popular TV Shows
	it('should handle FETCH_POPULAR_TV', () => {
   expect(reducerTv([], {
   	type: types.FETCH_POPULAR_TV, 
   		payload:{
   			data:{
   				results:[{title: "Some popular tv show"}]
   			}
   		}
   	}
   )).toEqual([{title: "Some popular tv show"}])
	})

	// Upcoming TV Shows
	it('should handle FETCH_UPCOMING_TV', () => {
   expect(reducerTv([], {
   	type: types.FETCH_UPCOMING_TV, 
   		payload:{
   			data:{
   				results:[{title: "Some upcoming tv show"}]
   			}
   		}
   	}
   )).toEqual([{title: "Some upcoming tv show"}])
	})

	// Playing now TV Shows
	it('should handle FETCH_PLAYING_TV', () => {
   expect(reducerTv([], {
   	type: types.FETCH_PLAYING_TV, 
   		payload:{
   			data:{
   				results:[{title: "Some playing tv show"}]
   			}
   		}
   	}
   )).toEqual([{title: "Some playing tv show"}])
	})

	// Top Rated TV Shows
	it('should handle FETCH_TOPRATED_TV', () => {
   expect(reducerTv([], {
   	type: types.FETCH_TOPRATED_TV, 
   		payload:{
   			data:{
   				results:[{title: "Some toprated tv show"}]
   			}
   		}
   	}
   )).toEqual([{title: "Some toprated tv show"}])
	})

	// TV Details
	it('should handle FETCH_TV_DETAILS', () => {
   expect(reducerTvDetails([], {
   	type: types.FETCH_TV_DETAILS, 
   		payload:{
   			data:{
   				title: "Some tv details"
   			}
   		}
   	}
   )).toEqual([{title: "Some tv details"}])
	})

	// Search TV shows
	it('should handle FETCH_SEARCH_RESULTS_TV', () => {
   expect(reducerTv([], {
   	type: types.FETCH_SEARCH_RESULTS_TV, 
   		payload:{
   			data:{
   				results:[{title: "Search tv shows"}]
   			}
   		}
   	}
   )).toEqual([{title: "Search tv shows"}])
	})








})