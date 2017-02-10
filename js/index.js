// StyleSheets
require("../css/normalize.css");
require("../css/00-global.css");
require("../css/01-movieoverview.css");
require("../css/02-header.css");
require("../css/03-movie_details.css");
// require("../css/04-search_bar.css");

// React
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from "redux-promise";
import reducers from './reducers';

// Redux Logger
import createLogger from 'redux-logger';

// React Router
import {Router, Route, IndexRoute, Link, IndexLink, IndexRedirect, hashHistory} from 'react-router';

// Components / Containers
import App from './components/app.js'

  // Movies 
import MovieOverviewPopular from './containers/movie_overview_popular.js'
import MovieOverviewUpcoming from './containers/movie_overview_upcoming.js'
import MovieOverviewPlaying from './containers/movie_overview_playing.js'
import MovieOverviewToprated from './containers/movie_overview_toprated.js'

  // TV-series 
import TvOverviewPopular from './containers/tv_overview_popular.js'
import TvOverviewUpcoming from './containers/tv_overview_upcoming.js'
import TvOverviewPlaying from './containers/tv_overview_playing.js'
import TvOverviewToprated from './containers/tv_overview_toprated.js'

  // Movie/tv Details
import MovieDetails from './containers/movie_details.js'
import TvDetails from './containers/tv_details.js'



// Consts
const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(ReduxPromise, logger)(createStore);

const app = document.getElementById("app");

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
          <IndexRoute component={MovieOverviewPopular} />
          <Route path="movieOverview/popular" component={MovieOverviewPopular} />
          <Route path="movieOverview/upcoming" component={MovieOverviewUpcoming} />
          <Route path="movieOverview/playing" component={MovieOverviewPlaying} />
          <Route path="movieOverview/toprated" component={MovieOverviewToprated} />
          <Route path="tvOverview/popular" component={TvOverviewPopular} />
          <Route path="tvOverview/upcoming" component={TvOverviewUpcoming} />
          <Route path="tvOverview/playing" component={TvOverviewPlaying} />
          <Route path="tvOverview/toprated" component={TvOverviewToprated} />
          <Route path="movieDetails/:id" component={MovieDetails} />
          <Route path="tvDetails/:id" component={TvDetails} />
      </Route>
    </Router>
	</Provider>,
app

);