import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Views/Home';
import Profile from '../Views/Profile';
import Buyers from '../Views/Buyers';
import Cars from '../Views/Cars';
import Tracks from '../Views/Tracks';
import ItemView from '../Views/ItemView';
import TrackForm from '../Components/TrackForm';
import EditTrack from '../Views/EditTracks';
import EditBuyer from '../Views/EditBuyer';
import Login from '../Views/Login';
import Register from '../Views/Register';

//prone to be changed due to PropTypes
export default function PublicRoutes({ isLoggedIn }) {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={isLoggedIn ? <Home/> : <Login/>} />
                <Route exact path="/cars" element={isLoggedIn ? <Cars/> : <Login/>} />
                <Route exact path="/tracks" element={isLoggedIn ? <Tracks/> : <Login/>} />
                <Route exact path="/tracks-form" element={isLoggedIn ? <TrackForm/> : <Login/>} />
                <Route exact path="/tracks-edit/:id" element={isLoggedIn ? <EditTrack/> : <Login/>} />
                <Route exact path="/item" element={isLoggedIn ? <ItemView/> : <Login/>} />
                <Route exact path="/buyers" element={isLoggedIn ? <Buyers/> : <Login/>} />
                <Route exact path ="/edit-buyer/:id" element={isLoggedIn ? <EditBuyer/> : <Login/>} />
                <Route exact path="/buyers/:id" element={isLoggedIn ? <Profile/> : <Login/>} />
                <Route exact path="/login" element={isLoggedIn ? <Home/> : <Login/>} />
                <Route exact path="/register" element={isLoggedIn ? <Home/> : <Register/>} />
                <Route exact path="/logout" element={isLoggedIn ? <Home/> : <Register/>} />
            </Routes>
        </div>
    );
}
