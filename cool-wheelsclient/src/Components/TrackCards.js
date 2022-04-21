import React from 'react'
import PropTypes from 'prop-types';

export default function TrackCards({ tracks }) {
    return (
        <div className="card">
            <img src={tracks.imageUrl} alt="tracks" />
            <div>
                <h5>{tracks.name}</h5>
                <p>{'$'}{tracks.price}</p>
                <button
                    type="button"
                    className="btn btn-danger"
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
