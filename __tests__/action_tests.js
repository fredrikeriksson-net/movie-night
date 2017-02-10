import * as actions from '../js/actions/index.js';

describe('Movie action tests', () => {
  it('should call popular movie action', () => {
    
    const expectedAction = {
      payload: {},
      type: 'FETCH_POPULAR_MOVIES',

    }
    expect(actions.fetchPopularMovies('FETCH_POPULAR_MOVIES')).toEqual(expectedAction)
  })

    it('should call upcoming movie action', () => {
    
    const expectedAction = {
      payload: {},
      type: 'FETCH_UPCOMING_MOVIES',
    }
    expect(actions.fetchUpcomingMovies('FETCH_UPCOMING_MOVIES')).toEqual(expectedAction)
  })

  it('should call playing movie action', () => {
    
    const expectedAction = {
      payload: {},
      type: 'FETCH_PLAYING_MOVIES',

    }
    expect(actions.fetchNowPlayingMovies('FETCH_PLAYING_MOVIES')).toEqual(expectedAction)
  })
  
    it('should call top rated movie action', () => {
    
    const expectedAction = {
      payload: {},
      type: 'FETCH_TOPRATED_MOVIES',
    }
    expect(actions.fetchTopRatedMovies('FETCH_TOPRATED_MOVIES')).toEqual(expectedAction)
  })

  it('should call movie details action', () => {
    
    const expectedAction = {
      payload: {},
      type: 'FETCH_MOVIE_DETAILS',
    }
    expect(actions.fetchMovieDetails('FETCH_MOVIE_DETAILS')).toEqual(expectedAction)
  })
  
    it('should call search movie action', () => {
    
    const expectedAction = {
      payload: {},
      type: 'FETCH_SEARCH_RESULTS',
    }
    expect(actions.fetchSearchResults('FETCH_SEARCH_RESULTS')).toEqual(expectedAction)
  })
})



describe('TV series action tests', () => {
  it('should call popular tv action', () => {
    const popularTvAction = {
      payload: {},
      type: "FETCH_POPULAR_TV",
    }
    expect(actions.fetchPopularTV()).toEqual(popularTvAction)
  })

    it('should call upcoming tv action', () => {
    const upcomingTvAction = {
      payload: {},
      type: "FETCH_UPCOMING_TV",
    }
    expect(actions.fetchUpcomingTV()).toEqual(upcomingTvAction)
  })

  	it('should call playing tv action', () => {
    const playingTvAction = {
      payload: {},
      type: "FETCH_PLAYING_TV",
    }
    expect(actions.fetchPlayingTV()).toEqual(playingTvAction)
  })

    it('should call top rated tv action', () => {
    const topRatedTvAction = {
      payload: {},
      type: "FETCH_TOPRATED_TV",
    }
    expect(actions.fetchTopRatedTV()).toEqual(topRatedTvAction)
  })

    it('should call tv details action', () => {
    const tvDetailsTvAction = {
      payload: {},
      type: "FETCH_TV_DETAILS",
    }
    expect(actions.fetchTvDetails()).toEqual(tvDetailsTvAction)
  })

    it('should call search tv action', () => {
    const searchTvAction = {
      payload: {},
      type: "FETCH_SEARCH_RESULTS_TV",
    }
    expect(actions.fetchSearchResultsTv()).toEqual(searchTvAction)
  })

})