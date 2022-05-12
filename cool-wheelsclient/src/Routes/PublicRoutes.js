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
import NewCars from '../Views/NewCars';
import EditCar from '../Views/EditCars';
import SingleCarView from '../Views/SingleCarView';
import Login from '../Views/Login';
import Register from '../Views/Register';
import SingleTrack from '../Views/SingleTrack';

//prone to be changed due to PropTypes
export default function PublicRoutes({ isLoggedIn, isAdmin }) {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={isLoggedIn ? <Home/> : <Login/>} />
                <Route exact path="/cars" element={isLoggedIn ? <Cars isAdmin={isAdmin}/> : <Login/>} />
                <Route exact path="/newcars" element={isLoggedIn ? <NewCars /> : <Login/>} />
                <Route exact path="/cars-edit/:id" element={isLoggedIn ? <EditCar /> : <Login/>} />
                <Route exact path="/cars-single/:id" element={isLoggedIn ? <SingleCarView /> : <Login/>} />
                <Route exact path="/tracks" element={isLoggedIn ? <Tracks isAdmin={isAdmin}/> : <Login/>} />
                <Route exact path="/tracks-single/:id" element={isLoggedIn ? <SingleTrack /> : <Login/>} />
                <Route exact path="/tracks-form" element={isLoggedIn ? <TrackForm/> : <Login/>} />
                <Route exact path="/tracks-edit/:id" element={isLoggedIn ? <EditTrack/> : <Login/>} />
                <Route exact path="/item" element={isLoggedIn ? <ItemView/> : <Login/>} />
                <Route exact path="/buyers" element={isLoggedIn ? <Buyers isAdmin={isAdmin}/> : <Login/>} />
                <Route exact path ="/edit-buyer/:firebaseUserId" element={isLoggedIn ? <EditBuyer/> : <Login/>} />
                <Route exact path="/buyers/:firebaseUserId" element={isLoggedIn ? <Profile isAdmin={isAdmin}/> : <Login/>} />
                <Route exact path="/login" element={isLoggedIn ? <Home/> : <Login/>} />
                <Route exact path="/register" element={isLoggedIn ? <Home/> : <Register/>} />
                <Route exact path="/logout" element={isLoggedIn ? <Home/> : <Register/>} />
            </Routes>
        </div>
    );
}
