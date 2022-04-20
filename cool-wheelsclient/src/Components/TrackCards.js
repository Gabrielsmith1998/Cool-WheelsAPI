import React from 'react'
import PropTypes from 'prop-types';

export default function TrackCards({ tracks }) {
    return (
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src={tracks.imageUrl} alt="tracks" />
            <div class="card-body">
                <h5 class="card-title">{tracks.name}</h5>
                <p class="card-text">{tracks.price}</p>
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
