// React
import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Actions
import { fetchSearchResultsTv } from "../actions/index.js";


// React Router
import {Router, Route, Link, hashHistory } from 'react-router';

// let category = this.props.params.menuCategory

export class SearchBarTv extends Component {

	
	onInputChange(term) {
		
		let heading = document.getElementsByTagName("h1")[0];

		this.props.fetchSearchResultsTv(term);
		
		if(term.length === 0) {
			location.reload();//Fullösning!!! Ska hitta på något bättre i mån av tid :)
		}
		else {
			heading.innerHTML = "Search Results"
		}
	}
	
	render(){
		return (
			<div id="search-bar-wrapper">
				<input 
					type="text" 
					placeholder="Search Tv"
					onChange={e => this.onInputChange(e.target.value)} 
					/>
				
			</div>
		)
	}
}


function mapStateToProps(state){
	return { tv: state.tv };
}

function mapDispatchToProps(dispatch){
	return bindActionCreators ({fetchSearchResultsTv}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarTv);



