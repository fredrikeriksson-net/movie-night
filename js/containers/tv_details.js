// React
import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Actions
import { fetchTvDetails } from "../actions/index.js";


// Containers/Components
import TvOverviewPopular from '../containers/tv_overview_popular.js'
import TvOverviewUpcoming from '../containers/tv_overview_upcoming.js'
import TvOverviewPlaying from '../containers/tv_overview_playing.js'
import TvOverviewToprated from '../containers/tv_overview_toprated.js'

// React Router
import {Router, Route, Link, hashHistory } from 'react-router';


export class TvDetails extends Component {
	
	componentWillMount() {
		if(this.props.fetchTvDetails) {
			this.props.fetchTvDetails(this.props.params.id);
		}
	}

	renderTvDetails(){
		
		if(this.props.tvDetails[0]){
			let i = 0;
			let j = 0;
			let k = 0;
			let releaseDate = this.props.tvDetails[0].first_air_date;
			let year = this.props.tvDetails[0].first_air_date.substring(0,4);

			let genres = "";
			let productionCompanies = "";
			let productionCountries = "";
			

			let genreArr =  this.props.tvDetails[0].genres;
			let productionCompaniesArr = this.props.tvDetails[0].production_companies;
			
			let genre = genreArr.forEach((genre) => {
				i !== genreArr.length - 1 ? genres += (genre.name + ", ") : genres += genre.name;
				i++;
			}) 

			let company = productionCompaniesArr.forEach((company) => {
				j !== productionCompaniesArr.length - 1 ? productionCompanies += (company.name + ", ") : productionCompanies += company.name;
				j++;
			}) 
	
		return(
		<div id="detail-wrapper">
			<div id="detail-container">
				{/*<Link to={"/"}><img src="../img/arrow_back.png" /></Link>*/}
				<figure>
					<img src={"https://image.tmdb.org/t/p/w500/" + this.props.tvDetails[0].poster_path}  alt="poster"/>
				</figure>
				<section>
					<h1>{this.props.tvDetails[0].name  + " (" + year + ")"}</h1>
					<span>{genres}</span>
					<h2>Overview</h2>
					<p>
						{this.props.tvDetails[0].overview}
					</p>
					<h2>Facts for geeks</h2>
					<p className="facts">Air Date: {releaseDate}</p>
					<p className="facts">Seasons: {this.props.tvDetails[0].number_of_seasons}</p>
					<p className="facts">Production Companies: {productionCompanies}</p>
					<p className="facts">Vote Avg: {this.props.tvDetails[0].vote_average}</p>
					<p className="facts">Vote Count: {this.props.tvDetails[0].vote_count}</p>
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

		 if(this.props.tvDetails[0]){
			console.log(this.props.tvDetails[0].title)
		} 
	
		return (
			<div className="fullPage">
				<div className="movieContainer">
					{this.renderTvDetails()}
				</div>
			</div>
		)
	}

}


function mapStateToProps(state){
	return { tvDetails: state.tvDetails };
}

function mapDispatchToProps(dispatch){
	return bindActionCreators ({fetchTvDetails}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TvDetails);