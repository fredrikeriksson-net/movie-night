// React
import React, { Component } from "react";

// Containers & Components
import Header from '../components/header.js'

	// Movies 
import MovieOverviewPopular from '../containers/movie_overview_popular.js'
import MovieOverviewUpcoming from '../containers/movie_overview_upcoming.js'
import MovieOverviewPlaying from '../containers/movie_overview_playing.js'
import MovieOverviewToprated from '../containers/movie_overview_toprated.js'

	// TV-series
import TvOverviewPopular from '../containers/tv_overview_popular.js'
import TvOverviewUpcoming from '../containers/tv_overview_upcoming.js'
import TvOverviewPlaying from '../containers/tv_overview_playing.js'
import TvOverviewToprated from '../containers/tv_overview_toprated.js'



export default class App extends Component {

		render(){
			return (
				<div>
					<Header />
					{this.props.children} 
				</div>
			)
		}

}