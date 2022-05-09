import React from 'react'
import PropTypes from 'prop-types';
import { deleteTrack, getSingleTrack, updateTrack } from '../api/data/TrackData';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged, deleteUser } from "firebase/auth";
import firebase from 'firebase/compat/app';


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
  };
  firebase.initializeApp(firebaseConfig);
  
  var uid;
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      uid = user.uid;
    }
  });

export default function TrackCards({ tracks, setTracks }) {
  const handleDelete = () => {
      deleteTrack(tracks.id).then((track) => setTracks(track));
  };

  const setBuyerId = () => {
    getSingleTrack(tracks.id).then((track) => updateTrack({...track, buyerId: uid}).then((tracks) => setTracks(tracks)))
  }

  console.warn(tracks)
    return (
        <>
        <div className="card">
            <img src={tracks.imageUrl} alt="tracks" />
            <div>
                <h5>{tracks.name}</h5>
                <p>{'$'}{tracks.price}</p>
                <Link to={`/tracks-edit/${tracks.id}`}>
                  <button type="button" className="btn btn-primary edit-btn">Edit</button>
                </Link>
                {setTracks ?                 
                <Link to={`/tracks-single/${tracks.id}`} className="btn btn-success">
                    View
                </Link> : ('')}
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={setBuyerId}
                >
                    <i className="far fa-edit" /> Buy
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleDelete}
                >
                    <i className="far fa-edit" /> Delete
                </button>
            </div>
        </div>
        </>
    );
}

TrackCards.propTypes = {
    tracks: PropTypes.shape(PropTypes.obj).isRequired,
};