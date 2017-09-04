/**
 * Created by zhoulinzhu. on 17/8/21.
 */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import Home from './modules/Home'
import Header from './modules/Header'
import Footer from './modules/Footer'
import News from './modules/News'
import Movies from './modules/Movies'

render((
    <Router history={hashHistory}>
        <Route path="/" component={Home}>
            <Route path="/header" component={Header}>
            </Route>
            <Route path="/footer" component={Footer}>
            </Route>
            <Route path="/news" component={News}>
            </Route>
            <Route path="/movies" component={Movies}>
            </Route>
        </Route>
    </Router>
),document.getElementById('app'))
