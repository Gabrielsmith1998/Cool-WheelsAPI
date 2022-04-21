// import getCars from '../api/Date/CarData';
import PropTypes from 'prop-types';
import React from 'react';

export default function CarCard({ car }) {
    /*const handleDelete = (method) => {
        if (method === 'delete') {
            deleteStuff(card.Id).then(() => {
                getCars().then(setCars);
            });
        }
    };*/
    return (
        <div className="card">
            <img src={car.imageUrl} className="card-img-top" alt="Car" />
            <div className="card-body">
                <h5 className="card-title">{car.name}</h5>
                <p className="card-text">{car.color}</p>
                <p className="card-text">{car.year}</p>
                <p className="card-text">{car.price}</p>
                {/*<button
                    onClick={() => handleDelete('Delete')}
                    className="btn btn-danger"
                    type="button"
                >
                    Delete
                </button>*/}
                </div>
        </div>
        );
};

CarCard.propTypes = {
    car: PropTypes.shape(PropTypes.obj).isRequired,
};