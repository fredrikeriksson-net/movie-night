// React
import React from 'react';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-addons-test-utils';

// Immutable
import { fromJS } from 'immutable';

// Ensyme
import { shallow, render, mount } from 'enzyme';

//Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux' 

// Components
import { MovieDetails } from '../js/containers/movie_details';
import { MovieOverviewPlaying } from '../js/containers/movie_overview_playing';
import { MovieOverviewPopular } from '../js/containers/movie_overview_popular';
import { MovieOverviewToprated } from '../js/containers/movie_overview_toprated';
import { MovieOverviewUpcoming } from '../js/containers/movie_overview_upcoming';
import { SearchBar } from '../js/containers/search_bar';
import { SearchBarTv } from '../js/containers/search_bar_tv';
import { TvDetails } from '../js/containers/tv_details';
import { TvOverviewPlaying } from '../js/containers/tv_overview_playing';
import { TvOverviewPopular } from '../js/containers/tv_overview_popular';
import { TvOverviewToprated } from '../js/containers/tv_overview_toprated';
import { TvOverviewUpcoming } from '../js/containers/tv_overview_upcoming';

// Reducers
import reducers from '../js/reducers';


describe('Components', function() {

  // MOVIE ----------------------------
	
  describe('Searchbar Movies', function() {
    	it('should render correctly', function() {
    		const tree = renderer.create(<SearchBar movies={fromJS({})} />).toJSON();
      		expect(tree).toMatchSnapshot();
    	});

    	it('should call onchange event and call fetchSearchResults', () => {
    		 const props = {
		       fetchSearchResults: (term) => { return term}
		    };

		    spyOn(props, 'fetchSearchResults');
		    props.fetchSearchResults('')

    		const wrapper = shallow(<SearchBar {...props}/>); 
    		wrapper.instance().onInputChange('')

    		expect(props.fetchSearchResults).toHaveBeenCalled()
       	});
    });


    describe('Movie Details', function() {
    	it('should render correctly', function() {
    	const tree = renderer.create(
          <Provider store={createStore(reducers)}>
    			 <MovieDetails movieDetails={fromJS({})} />
    			</Provider>).toJSON();
      		expect(tree).toMatchSnapshot();
    	});
    	it('checks if renderMovieDetails has been called', () => {
		    spyOn(MovieDetails.prototype, 'renderMovieDetails');

		    const wrapper = mount(<MovieDetails movieDetails={fromJS({})} />);

		    expect(wrapper).toBeDefined();
		    expect(MovieDetails.prototype.renderMovieDetails).toHaveBeenCalledTimes(1);
		});

    });


    describe('Movies Playing', function() {
    	it('should render correctly', function() {
    		
    		const tree = renderer.create(
          <Provider store={createStore(reducers)}>
    			 <MovieOverviewPlaying movies={fromJS({})}/>
    			</Provider>).toJSON();
      		expect(tree).toMatchSnapshot();
      	});
      	it('checks if renderMovies has been called', () => {
		    spyOn(MovieOverviewPlaying.prototype, 'renderMovies');

		    const wrapper = mount(
		    			<Provider store={createStore(reducers)}>
		    			<MovieOverviewPlaying movies={fromJS({})} />
		    			</Provider>);

		    expect(wrapper).toBeDefined();
		    expect(MovieOverviewPlaying.prototype.renderMovies).toHaveBeenCalled;
		});
    });


    describe('Movies Popular', function() {
    	it('should render correctly', function() {
    		const tree = renderer.create(
          <Provider store={createStore(reducers)}>
    			 <MovieOverviewPopular movies={fromJS({})}/>
    			</Provider>).toJSON();
      		expect(tree).toMatchSnapshot();
    	});
    	it('checks if renderMovies has been called', () => {
		    spyOn(MovieOverviewPopular.prototype, 'renderMovies');

		    const wrapper = mount(
		    			<Provider store={createStore(reducers)}>
		    			<MovieOverviewPopular movies={fromJS({})} />
		    			</Provider>);

		    expect(wrapper).toBeDefined();
		    expect(MovieOverviewPopular.prototype.renderMovies).toHaveBeenCalled;
		});
    });


    describe('Movies Toprated', function() {
    	it('should render correctly', function() {
    		const tree = renderer.create(
          <Provider store={createStore(reducers)}>
    			 <MovieOverviewToprated movies={fromJS({})}/>
    			</Provider>).toJSON();
      		expect(tree).toMatchSnapshot();
    	});
    	it('checks if renderMovies has been called', () => {
		    spyOn(MovieOverviewToprated.prototype, 'renderMovies');

		    const wrapper = mount(
		    			<Provider store={createStore(reducers)}>
		    			<MovieOverviewToprated movies={fromJS({})} />
		    			</Provider>);

		    expect(wrapper).toBeDefined();
		    expect(MovieOverviewToprated.prototype.renderMovies).toHaveBeenCalled;
		});
    });


    describe('Movies Upcoming', function() {
    	it('should render correctly', function() {
    		const tree = renderer.create(
          <Provider store={createStore(reducers)}>
    			 <MovieOverviewUpcoming movies={fromJS({})}/>
    			</Provider>).toJSON();
      		expect(tree).toMatchSnapshot();
    	});
    	it('checks if renderMovies has been called', () => {
		    spyOn(MovieOverviewUpcoming.prototype, 'renderMovies');

		    const wrapper = mount(
		    			<Provider store={createStore(reducers)}>
		    			<MovieOverviewUpcoming movies={fromJS({})} />
		    			</Provider>);

		    expect(wrapper).toBeDefined();
		    expect(MovieOverviewUpcoming.prototype.renderMovies).toHaveBeenCalled;
		});

    });


    // TV ----------------------------

    describe('Searchbar Tv', function() {
    	it('should render correctly', function() {
    		const tree = renderer.create(<SearchBarTv tv={fromJS({})} />).toJSON();
      		expect(tree).toMatchSnapshot();
    	});

    	it('should call onchange event and call fetchSearchResults', () => {
    		 const props = {
		       fetchSearchResultsTv: (term) => { return term}
		    };

		    spyOn(props, 'fetchSearchResultsTv');
		    props.fetchSearchResultsTv('')

    		const wrapper = shallow(<SearchBarTv {...props}/>); 
    		wrapper.instance().onInputChange('')

    		expect(props.fetchSearchResultsTv).toHaveBeenCalled()
       	});
    });

    describe('Tv Details', function() {
    	it('should render correctly', function() {
    		const tree = renderer.create(
          <Provider store={createStore(reducers)}>
    			 <TvDetails tvDetails={fromJS({})}/>
    			</Provider>).toJSON();
      		expect(tree).toMatchSnapshot();
    	});
    });


    describe('Tv Playing', function() {
    	it('should render correctly', function() {
    		const tree = renderer.create(
          <Provider store={createStore(reducers)}>
    			 <TvOverviewPlaying tv={fromJS({})}/>
    			</Provider>).toJSON();
      		expect(tree).toMatchSnapshot();
    	});
    	it('checks if renderTv has been called', () => {
		    spyOn(TvOverviewPlaying.prototype, 'renderTv');

		    const wrapper = mount(
		    			<Provider store={createStore(reducers)}>
		    			<TvOverviewPlaying tv={fromJS({})} />
		    			</Provider>);

		    expect(wrapper).toBeDefined();
		    expect(TvOverviewPlaying.prototype.renderTv).toHaveBeenCalled;
		});
    });


    describe('Tv Popular', function() {
    	it('should render correctly', function() {
    		const tree = renderer.create(
          <Provider store={createStore(reducers)}>
    			 <TvOverviewPopular tv={fromJS({})}/>
    			</Provider>).toJSON();
      		expect(tree).toMatchSnapshot();
    	});
    	it('checks if renderTv has been called', () => {
		    spyOn(TvOverviewPopular.prototype, 'renderTv');

		    const wrapper = mount(
		    			<Provider store={createStore(reducers)}>
		    			<TvOverviewPopular tv={fromJS({})} />
		    			</Provider>);

		    expect(wrapper).toBeDefined();
		    expect(TvOverviewPopular.prototype.renderTv).toHaveBeenCalled;
		});
    });


    describe('Tv Toprated', function() {
     	it('should render correctly', function() {
    		const tree = renderer.create(
          <Provider store={createStore(reducers)}>
					 <TvOverviewToprated tv={fromJS({})}/>
    			</Provider>).toJSON();
      		expect(tree).toMatchSnapshot();
    	});
    	it('checks if renderTv has been called', () => {
		    spyOn(TvOverviewToprated.prototype, 'renderTv');

		    const wrapper = mount(
		    			<Provider store={createStore(reducers)}>
		    			<TvOverviewToprated tv={fromJS({})} />
		    			</Provider>);

		    expect(wrapper).toBeDefined();
		    expect(TvOverviewToprated.prototype.renderTv).toHaveBeenCalled;
		});
    });


    describe('Tv Upcoming', function() {
    	it('should render correctly', function() {
    		const tree = renderer.create(
          <Provider store={createStore(reducers)}>
    			 <TvOverviewUpcoming tv={fromJS({})}/>
    			</Provider>).toJSON();
      		expect(tree).toMatchSnapshot();
    	});
    	it('checks if renderTv has been called', () => {
		    spyOn(TvOverviewUpcoming.prototype, 'renderTv');

		    const wrapper = mount(
		    			<Provider store={createStore(reducers)}>
		    			<TvOverviewUpcoming tv={fromJS({})} />
		    			</Provider>);

		    expect(wrapper).toBeDefined();
		    expect(TvOverviewUpcoming.prototype.renderTv).toHaveBeenCalled;
		});
    });

});

    
