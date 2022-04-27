import React from 'react';
import { Link } from 'react-router-dom';
import getCars from '../api/Date/CarData';
import PropTypes from 'prop-types';

export default function CarCard({ car }) {
    const handleDelete = (method) => {
        if (method === 'delete') {
            deleteStuff(card.Id).then(() => {
                getCars().then(setCars);
            });
        }
    };
    return (
        <div className="card car-cards">
            <img src={car.imageUrl} className="card-img-top" alt="Car" />
            <div className="card-body">
                <h5 className="card-title">{car.name}</h5>
                <p className="card-text">{car.color}</p>
                <p className="card-text">{car.year}</p>
                <p className="card-text">{car.price}</p>
                <div className="button-row">
                <Link to={`/edit/${car.id}`} className="btn btn-warning">
                    Edit
                </Link>
                <button
                    onClick={() => handleDelete('Delete')}
                    className="btn btn-danger"
                    type="button"
                >
                    Delete
                </button>
                </div>
                </div>
        </div>
        );
};

CarCard.propTypes = {
    car: PropTypes.shape(PropTypes.obj).isRequired,
};