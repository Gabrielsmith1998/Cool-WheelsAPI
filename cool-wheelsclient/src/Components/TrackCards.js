import React from 'react'
import PropTypes from 'prop-types';
import { deleteTrack, getSingleTrack, updateTrack } from '../api/data/TrackData';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
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

export default function TrackCards({ tracks, setTracks, isAdmin }) {
  const handleDelete = () => {
      deleteTrack(tracks.id).then((track) => setTracks(track));
  };

  const setBuyerId = () => {
      if (window.confirm(`Are you sure you want to buy the ${tracks.name}?`) === true) {
        getSingleTrack(tracks.id).then((track) => updateTrack({...track, buyerId: uid}).then((tracks) => setTracks(tracks)))
      }
  }

    return (
        <>
        <div className="card">
            <img src={tracks.imageUrl} alt="tracks" />
            <div>
                <h5>{tracks.name}</h5>
                <p>{'$'}{tracks.price}</p>
                {setTracks ?                 
                <Link to={`/tracks-single/${tracks.id}`} className="btn btn-success">
                    View
                </Link> : ('')}
                {tracks.buyerId === null ? (                
                <button
                    type="button"
                    className="btn btn-warning"
                    onClick={setBuyerId}
                >
                    <i className="far fa-edit" /> Buy
                </button>) : ("")}
                {isAdmin ? (
                <>
                <Link to={`/tracks-edit/${tracks.id}`}>
                  <button type="button" className="btn btn-primary edit-btn">Edit</button>
                </Link>              
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleDelete}
                >
                    <i className="far fa-edit" /> Delete
                </button>
                </>
                ) : (
                  ""
                )}
            </div>
        </div>
        </>
    );
}

TrackCards.propTypes = {
    tracks: PropTypes.shape(PropTypes.obj).isRequired,
};