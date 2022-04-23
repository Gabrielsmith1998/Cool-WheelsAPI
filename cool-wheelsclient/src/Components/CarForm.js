import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createCar, updateCar } from '../api/data/CarData';

const initialState = {
    id: "",
    color: "",
    name: "",
    year: "",
    price: "",
    imageUrl: "",
    buyerId: "",
}

export default function CarForm({ obj }) {
    const [formInput, setFormInput] = useState(initialState);
    const navigate = useNavigate();


    useEffect(() => {
        if (obj.id) {
            setFormInput(obj);
        } else {
            setFormInput(initialState);
        }
    }, [obj]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormInput((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const resetForm = () => {
        setFormInput(initialState);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (obj.id) {
            updateCar(obj.id, formInput).then(() => {
                resetForm();
                navigate.push('/cars')
            });
        } else {
            createCar({ ...formInput }).then(() => {
                resetForm();
                navigate.push('/cars')
            });
        }
    };

    return (
        <>
            <div
                className="card text-center"
            >
                <h2
                    className="card-header"
                >
                    New Stuff
                </h2>
                <div
                    className="card-body"
                >
                    <h5 className="card-title">Enter new Car Stock</h5>
                    <form onSubmit={handleSubmit}>
                        <input
                            id="name"
                            name="name"
                            value={formInput.name}
                            onChange={handleChange}
                            required
                            placeholder="Item Name"
                        />
                        <p />
                        <input
                            id="color"
                            name="color"
                            value={formInput.color}
                            onChange={handleChange}
                            required
                            placeholder="Item Color"
                        />
                        <p />
                        <input
                            id="year"
                            name="year"
                            value={formInput.year}
                            onChange={handleChange}
                            required
                            placeholder="Item Color"
                        />
                        <p />
                        <input
                            id="price"
                            name="price"
                            value={formInput.price}
                            onChange={handleChange}
                            required
                            placeholder="Item Color"
                        />
                        <p />
                        <input
                            id="imageUrl"
                            name="imageUrl"
                            value={formInput.imageUrl}
                            onChange={handleChange}
                            required
                            placeholder="Item Image"
                        />
                        <p />
                        <button
                            type="submit"
                            className="btn btn-info"
                        >
                            {obj.id ? 'Edit' : 'Create'}
                        </button>
                    </form>
                </div>
                <div
                    className="card-footer text-muted"
                >
                    Car Creator for Stock
                </div>
            </div>
        </>
    );
}

CarForm.propTypes = {
    obj: PropTypes.shape(PropTypes.obj),
};

CarForm.defaultProps = {
    obj: {},
};
