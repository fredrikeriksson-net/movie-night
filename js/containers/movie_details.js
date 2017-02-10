// React
import React, { Component, PropTypes } from "react";

// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Actions
import { fetchMovieDetails } from "../actions/index.js";


// Containers/Components
import MovieOverviewPopular from '../containers/movie_overview_popular.js'
import MovieOverviewUpcoming from '../containers/movie_overview_upcoming.js'
import MovieOverviewPlaying from '../containers/movie_overview_playing.js'
import MovieOverviewToprated from '../containers/movie_overview_toprated.js'

// React Router
import {Router, Route, Link, hashHistory } from 'react-router';


export class MovieDetails extends Component {
	

	componentWillMount() {
		if(this.props.fetchMovieDetails) {
			this.props.fetchMovieDetails(this.props.params.id);
		}
	}

	renderMovieDetails(){

			
			if(this.props.movieDetails[0]){
				let i = 0;
				let j = 0;
				let k = 0;
				let releaseDate = this.props.movieDetails[0].release_date;
				let year = this.props.movieDetails[0].release_date.substring(0,4);

				let genres = "";
				let productionCompanies = "";
				let productionCountries = "";
				

				let genreArr =  this.props.movieDetails[0].genres;
				let productionCompaniesArr = this.props.movieDetails[0].production_companies;
				let productionCountriesArr = this.props.movieDetails[0].production_countries;

				let genre = genreArr.forEach((genre) => {
					i !== genreArr.length - 1 ? genres += (genre.name + ", ") : genres += genre.name;
					i++;
				}) 

				let company = productionCompaniesArr.forEach((company) => {
					j !== productionCompaniesArr.length - 1 ? productionCompanies += (company.name + ", ") : productionCompanies += company.name;
					j++;
				}) 

				let country = productionCountriesArr.forEach((country) => {
					k !== productionCountriesArr.length - 1 ? productionCountries += (country.name + ", ") : productionCountries += country.name;
					k++;
				}) 
			return(
			<div id="detail-wrapper">
				<div id="detail-container">
					
					<figure>
						<img src={"https://image.tmdb.org/t/p/w500/" + this.props.movieDetails[0].poster_path}  alt="poster"/>
					</figure>
					<section>
						<h1>{this.props.movieDetails[0].title + " (" + year + ")"}</h1>
						<span>{genres}</span>
						<h2>Overview</h2>
						<p>
							{this.props.movieDetails[0].overview}
						</p>
						<h2>Facts for geeks</h2>
						<p className="facts">Release Date: {releaseDate}</p>
						<p className="facts">Countries: {productionCountries}</p>
						<p className="facts">Production Companies: {productionCompanies}</p>
						<p className="facts">Vote Avg: {this.props.movieDetails[0].vote_average}</p>
						<p className="facts">Vote Count: {this.props.movieDetails[0].vote_count}</p>
						<Link href="http://www.facebook.com">Facebook</Link>
					</section>
				</div>	
			</div>
			)
		}
		else {
			<div>Loading movies...</div>
		}
	}

	render(){
		return (
			<div className="fullPage">
				<div className="movieContainer">
					{this.renderMovieDetails()}
				</div>
			</div>
		)
	}

}


function mapStateToProps(state){
	return { movieDetails: state.movieDetails };
}

function mapDispatchToProps(dispatch){
	return bindActionCreators ({fetchMovieDetails}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);