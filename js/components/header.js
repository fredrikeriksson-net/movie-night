import React, { Component } from 'react';
import { Link } from 'react-router';
import SearchBar from '../containers/search_bar';

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      showMovieSubMenu: false,
      showTvSubMenu: false,
        showActiveMovie: false,
        showActiveTv: false,
    }
    
    this.toggleClickMovie = this.toggleClickMovie.bind(this);
    this.toggleClickTv = this.toggleClickTv.bind(this);
  }
  toggleClickMovie(){
    this.setState({
        showTvSubMenu: false,
        showActiveTv: false,
    });
    this.setState(prevState => ({
        showMovieSubMenu: !prevState.showMovieSubMenu,
        showActiveMovie: !prevState.showActiveMovie,
    }));
  }
  toggleClickTv(){
    this.setState({
        showMovieSubMenu: false,
        showActiveMovie: false,
    });
    this.setState(prevState => ({
      showTvSubMenu: !prevState.showTvSubMenu,
        showActiveTv: !prevState.showActiveTv,
    }));
  }
  render(){
    const showHideMovie = {
      'display': this.state.showMovieSubMenu ? 'flex' : 'none'
    };
    const showHideTv = {
      'display': this.state.showTvSubMenu ? 'flex' : 'none'
    }
    const showActiveMovie = {
        'borderBottom': this.state.showActiveMovie ? '3px solid #fff' : 'none'
    }
    const showActiveTv = {
        'borderBottom': this.state.showActiveTv ? '3px solid #fff' : 'none'
    }
    return(
      <header className="app-header">
        <div className="header-container centeringDiv">
        <img className="logo" src="img/logo.png" />
        <nav className="site-navigation">
          <ul>
              <li>
                <Link style={showActiveMovie} onClick={this.toggleClickMovie}>
                  Film
                </Link>
              </li>
              <li>
                <Link style={showActiveTv} onClick={this.toggleClickTv}>
                  TV
                </Link>
              </li>
          </ul>
        </nav>
        </div>
        <nav id="cat-movie" className="sub-menu" style={showHideMovie}>
          <div className="centeringDiv">
              <ul>
                <li className="active-name">Film:</li>
                <li className="menu-item">
                  <Link to="/movieOverview/popular" onClick={this.toggleClickMovie}>
                    Popular
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to='/movieOverview/playing' onClick={this.toggleClickMovie}>
                    Now Playing
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/movieOverview/topRated" onClick={this.toggleClickMovie}>
                    Top Rated
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/movieOverview/upcoming" onClick={this.toggleClickMovie}>
                    Upcoming
                  </Link>
                </li>
              </ul>
          </div>
        </nav>
        <nav id="cat-tv" className="sub-menu" style={showHideTv}>
          <div className="centeringDiv">
              <ul>
                <li className="active-name">TV:</li>
                <li className="menu-item">
                  <Link to="/tvOverview/popular" onClick={this.toggleClickTv}>
                    Popular
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to='/tvOverview/playing' onClick={this.toggleClickTv}>
                    Now Playing
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/tvOverview/topRated" onClick={this.toggleClickTv}>
                    Top Rated
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/tvOverview/upcoming" onClick={this.toggleClickTv}>
                    Upcoming
                  </Link>
                </li>
              </ul>
          </div>
        </nav>
      </header>
    );
  }
}