import React from 'react';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteCar } from '../api/data/CarData';

export default function SingleCar({ car }) {
    const Navigate = useNavigate();

    const handleDelete = () => {
        deleteCar(car.id).then(() => {
            Navigate('/Cars')
        });
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

SingleCar.propTypes = {
    car: PropTypes.shape(PropTypes.obj).isRequired,
};