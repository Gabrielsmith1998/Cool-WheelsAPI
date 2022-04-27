import React from 'react'
import PropTypes from 'prop-types';
import { deleteTrack } from '../api/data/TrackData';

export default function TrackCards({ tracks, setTracks }) {
  const handleDelete = () => {
      deleteTrack(tracks.id).then((track) => setTracks(track));
  };
    return (
        <div className="card">
            <img src={tracks.imageUrl} alt="tracks" />
            <div>
                <h5>{tracks.name}</h5>
                <p>{'$'}{tracks.price}</p>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleDelete}
                >
                    <i className="far fa-edit" /> Delete
                </button>
            </div>
        </div>
    );
}

TrackCards.propTypes = {
    tracks: PropTypes.shape(PropTypes.obj).isRequired,
};
