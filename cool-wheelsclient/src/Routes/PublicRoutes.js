import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import PropTypes from 'prop-types';
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

//prone to be changed due to PropTypes
export default function PublicRoutes() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/cars" element={<Cars/>} />
                <Route exact path="/profile" element={<Profile/>} />
                <Route exact path="/cars" element={<Cars />} />
                <Route exact path="/newcars" element={<NewCars />} />
                <Route exact path="/tracks" element={<Tracks/>} />
                <Route exact path="/tracks-form" element={<TrackForm />} />
                <Route exact path="/tracks-edit/:id" element={<EditTrack />} />
                <Route exact path="/item" element={<ItemView/>} />
                <Route exact path="/buyers" element={<Buyers/>} />
                <Route exact path ="/edit-buyer/:id" element={<EditBuyer/>} />
                <Route exact path="/buyers/:id" element={<Profile/>} />
            </Routes>
        </div>
    );
}
