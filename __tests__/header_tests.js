import ReactTestRenderer from 'react-test-renderer'
import React from 'react'
import { Match, Route, IndexRoute, Link } from 'react-router';
import { mount, simulate, shallow } from 'enzyme';
import Header from '../js/components/header';
import sinon from 'sinon';

describe('Header', () => {
    it('renders header without crashing', () => {
        shallow(<Header/>);
    });
    
    describe('The Movie Nav', () => {
        it('should show all states as false', () => {
            const wrapper = shallow(<Header />);
            expect(wrapper.state().showMovieSubMenu).toBe(false);
            expect(wrapper.state().showTvSubMenu).toBe(false);
            expect(wrapper.state().showActiveMovie).toBe(false);
            expect(wrapper.state().showActiveTv).toBe(false);
        });
        
        it('should change the state of the same submenu on click to true', () => {
            const wrapper = shallow(<Header />);
            wrapper.state().showMovieSubMenu = true;
            wrapper.state().showActiveMovie = true;
            wrapper.state().showTvSubMenu = false;
            wrapper.state().showActiveTv = false;
            expect(wrapper.state().showMovieSubMenu).toBe(true);
            expect(wrapper.state().showTvSubMenu).toBe(false);
            expect(wrapper.state().showActiveMovie).toBe(true);
            expect(wrapper.state().showActiveTv).toBe(false);
        });
        
        it('toggleClickMovie()', () => {
            const wrapper = shallow(<Header />);
            wrapper.instance().searchDish = jest.fn();
            wrapper.update();
            wrapper.instance().toggleClickMovie(
            wrapper.setState({
                showMovieSubMenu: true,
                showActiveMovie: true,
                showTvSubMenu: false,
                showActiveTv: false
            })
            );
        });
        
        it('toggleClickTv()', () => {
            const wrapper = shallow(<Header />);
            wrapper.instance().searchDish = jest.fn();
            wrapper.update();
            wrapper.instance().toggleClickTv(
            wrapper.setState({
                showMovieSubMenu: false,
                showActiveMovie: false,
                showTvSubMenu: true,
                showActiveTv: true
            })
            );
        })
    })
})