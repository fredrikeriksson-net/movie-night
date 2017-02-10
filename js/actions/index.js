import axios from "axios";
import moment from "moment";

import * as types from "../constants/ActionTypes.js";

const API_KEY = "62dd9d8692c800c357c7bd1bf670c6aa";

let startDate = moment().format('YYYY-MM-D');
let endDate = moment().endOf("Y");


// --- MOVIES --------------------------------------------------------

// Hämtar alla populära filmer
export function fetchPopularMovies() {
	const request = axios({
  	method: "GET",
  	headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  	url: "movie/popular?api_key=" + API_KEY + "&language=se&page=1",
  	baseURL: "https://api.themoviedb.org/3",
	})

	return {
		type: types.FETCH_POPULAR_MOVIES,
		payload: request
	};


}

// Hämtar alla kommande filmer
// Lägg till Moment date variablar istället för statiskt datum
export function fetchUpcomingMovies(){
	const request = axios({
		method: "GET",
  	headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  	url: "discover/movie?api_key=" + API_KEY + "&language=en-US&sort_by=primary_release_date.asc&include_adult=false&include_video=false&page=1&primary_release_date.gte=" + startDate + "&primary_release_date.lte=" + endDate + "&vote_average.gte=1",
  	baseURL: "https://api.themoviedb.org/3"
	})

	return {
		type: types.FETCH_UPCOMING_MOVIES,
		payload: request
	};
}

// Hämtar alla filmer som spelas nu
export function fetchNowPlayingMovies(){
	const request = axios({
		method: "GET",
  	headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  	url: "/movie/now_playing?api_key=" + API_KEY + "&language=se&page=1",
  	baseURL: "https://api.themoviedb.org/3"
	})

	return {
		type: types.FETCH_PLAYING_MOVIES,
		payload: request
	};
}

// Hämtar alla filmer med toppbetyg
export function fetchTopRatedMovies(){
	const request = axios({
		method: "GET",
  	headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  	url: "/movie/top_rated?api_key=" + API_KEY + "&language=se&page=1",
  	baseURL: "https://api.themoviedb.org/3"
	})

	return {
		type: types.FETCH_TOPRATED_MOVIES,
		payload: request
	};
}

// Hämtar detaljer för film
export function fetchMovieDetails(movieId){
	const request = axios({
		method: "GET",
  	headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  	url: "/movie/" + movieId + "?api_key=" + API_KEY + "&language=en-US",
  	baseURL: "https://api.themoviedb.org/3"
	})

	return {
		type: types.FETCH_MOVIE_DETAILS,
		payload: request
	};
}
// Hämtar sökresultat film
export function fetchSearchResults(term){
	const request = axios({
		method: "GET",
  	headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  	url: "/search/movie?api_key=" + API_KEY + "&query=" + term,
  	baseURL: "https://api.themoviedb.org/3"
	})

	return {
		type: types.FETCH_SEARCH_RESULTS,
		payload: request
	};
}

// --- TV ------------------------------------------------------------

// Hämtar alla populära tv-serier
export function fetchPopularTV(){
	const request = axios({
  	method: "GET",
  	headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  	url: "tv/popular?api_key=" + API_KEY + "&language=se&page=1",
  	baseURL: "https://api.themoviedb.org/3"
	})

	return {
		type: types.FETCH_POPULAR_TV,
		payload: request
	};
}

// Hämtar alla kommande tv-serier
// Lägg till Moment date variablar istället för statiskt datum
export function fetchUpcomingTV(){
	const request = axios({
  	method: "GET",
  	headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  	url: "discover/tv?api_key=" + API_KEY + "&language=en-US&vote_count.gte=0&sort_by=first_air_date.desc&first_air_date.gte=2017-01-15&first_air_date.lte=2017-01-31&page=1&include_null_first_air_dates=false",
  	baseURL: "https://api.themoviedb.org/3"
	})

	return {
		type: types.FETCH_UPCOMING_TV,
		payload: request
	};
}

// Hämtar alla tv-serier som spelas nu
export function fetchPlayingTV(){
	const request = axios({
  	method: "GET",
  	headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  	url: "tv/airing_today?api_key=" + API_KEY + "&language=se&page=1",
  	baseURL: "https://api.themoviedb.org/3"
	})

	return {
		type: types.FETCH_PLAYING_TV,
		payload: request
	};
}

// Hämtar alla tv-serier med toppbetyg
export function fetchTopRatedTV(){
	const request = axios({
  	method: "GET",
  	headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  	url: "tv/top_rated?api_key=" + API_KEY + "&language=se&page=1",
  	baseURL: "https://api.themoviedb.org/3"
	})

	return {
		type: types.FETCH_TOPRATED_TV,
		payload: request
	};
}

// Hämtar detaljer för tv serier
export function fetchTvDetails(tvId){
	const request = axios({
  	method: "GET",
  	headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  	url: "/tv/" + tvId + "?api_key=" + API_KEY + "&language=en-US",
  	baseURL: "https://api.themoviedb.org/3"
	})

	return {
		type: types.FETCH_TV_DETAILS,
		payload: request
	};
}

//Hämtar sökresultat tv
export function fetchSearchResultsTv(term){
	const request = axios({
		method: "GET",
  	headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  	url: "/search/tv?api_key=" + API_KEY + "&query=" + term,
  	baseURL: "https://api.themoviedb.org/3"
	})

	return {
		type: types.FETCH_SEARCH_RESULTS_TV,
		payload: request
	};
}



