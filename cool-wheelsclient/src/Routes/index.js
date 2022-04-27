import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Home from '../Views/Home';
import Profile from '../Views/Profile';
import Buyers from '../Views/Buyers';
import Cars from '../Views/Cars';
import Tracks from '../Views/Tracks';
import ItemView from '../Views/ItemView';
import SignIn from '../Views/SignIn';

//prone to be changed due to PropTypes
export default function PublicRoutes() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/profile" element={<Profile/>} />
                <Route exact path="/cars" element={<Cars/>} />
                <Route exact path="/tracks" element={<Tracks/>} />
                <Route exact path="/item" element={<ItemView/>} />
                <Route exact path="/buyers" element={<Buyers />} />
                <Route exact path="/signin" element={<SignIn />} />
            </Routes>
        </div>
    );
}
