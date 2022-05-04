import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteCar } from '../api/data/CarData';

export default function CarCard({ car, setCars }) {

    const handleDelete = () => {
        deleteCar(car.id).then((car) => setCars(car));
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
                <Link to={`/cars-edit/${car.id}`} className="btn btn-warning">
                    Edit
                </Link>
                    <Link to={`/cars-single/${car.id}`} className="btn btn-success">
                    View
                </Link>
                <button
                    onClick={() => handleDelete('delete')}
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