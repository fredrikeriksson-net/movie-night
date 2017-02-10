import ReactTestRenderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import React from 'react'
import {Router, Route, Link, hashHistory} from 'react-router';

describe('A <Link>', () => {
    let node
      beforeEach(() => {
        node = document.createElement('div')
    })
    it('creates a functioning href', () => {
        const LinkWrapper = () => (
            <Link to={{
                pathname: 'movieOverview/popular'
            }}>
                Link
            </Link>
        )
        ReactTestRenderer.create((
            <Router history={hashHistory}>
               <Route path="/" component={LinkWrapper} />
            </Router>
        ), node, () => {
            const a = node.querySelector('a')
            expect(a.getAttribute('href')).toEqual('/movieOverview/popular')
        })
    })
})