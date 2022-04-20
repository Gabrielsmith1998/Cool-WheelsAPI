import getCars from '../api/Date/';
import PropTypes from 'prop-types';
import React from 'react';

export default function CarCard({ cars, setCars }) {
    const handleDelete = (method) => {
        if (method === 'delete') {
            deleteStuff(card.Id).then(() => {
                getCars().then(setCars);
            });
        }
    };
    return (
        <div class="card" style={{ width: '18rem' }}>
            <img src={cars.ImageUrl} class="card-img-top" alt="Car" />
                <div class="card-body">
                <h5 class="card-title">{cars.Name}</h5>
                <p class="card-text">{cars.Color}</p>
                <p class="card-text">{cars.Year}</p>
                <p class="card-text">{cars.Price}</p>
                <button
                    onClick={() => handleDelete('Delete')}
                    className="btn btn-danger"
                    type="button"
                >
                    Delete
                </button>
                </div>
        </div>
        );
};

CarCard.PropTypes = {
    cars: PropTypes.shape(PropTypes.obj).isRequired,
};