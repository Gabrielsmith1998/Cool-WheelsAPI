import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteCar, getSingleCar, updateCar } from '../api/data/CarData';
import firebase from 'firebase/compat/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

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

export default function CarCard({ car, setCars, isAdmin }) {

    const handleDelete = () => {
        deleteCar(car.id).then((car) => setCars(car));
    };

    const setCarBuyerId = () => {
        if (window.confirm(`Are you sure you want to buy the ${car.name}?`) === true) {
            getSingleCar(car.id).then((carEdit) => updateCar({ ...carEdit, buyerId: uid }).then((car) => setCars(car)))
        }
    }

    return (
        <div className="card" id="car-cards">
            <img src={car.imageUrl} className="card-img-top" alt="Car" />
            <div className="card-body">
                <h5 className="card-title">{car.name}</h5>
                <p className="card-text">{car.color}</p>
                <p className="card-text">{car.year}</p>
                <p className="card-text">{car.price}</p>
                <div className="button-row">
                    {car.buyerId === null ? (
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={setCarBuyerId}
                        > Buy
                        </button>) : ("")}
                    <Link to={`/cars-single/${car.id}`} className="btn btn-success">
                    View
                    </Link>
                    {isAdmin ? (
                        <><Link to={`/cars-edit/${car.id}`} className="btn btn-warning">
                            Edit
                        </Link><button
                            onClick={() => handleDelete('delete')}
                            className="btn btn-danger"
                            type="button"
                        >
                                Delete
                            </button></>
                                ) : (
                                ""
                       )}
                </div>
                </div>
        </div>
        );
};

CarCard.propTypes = {
    car: PropTypes.shape(PropTypes.obj).isRequired,
};