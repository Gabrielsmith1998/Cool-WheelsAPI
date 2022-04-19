import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Home from '.../Views/Home';
import Profile from '..Views/Profile';

//prone to be changed due to PropTypes
export default function Routes({ }) {
    return (
        <div>
            <Switch>
                <Route
                    exact
                    path="/" />
                <Home />
                <Route
                    exact
                    path="/profile" />
                <Profile />
                <Route
                    exact
                    path="/cars" />
                <Cars />
                <Route
                    exact
                    path="/tracks" />
                <Tracks />
                <Route
                    exact
                    path="/item" />
                <ItemView />
            </Switch>
        </div>
    );
}