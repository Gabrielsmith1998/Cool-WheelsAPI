import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleCar } from '../api/data/CarData';
import CarForm from '../Components/CarForm';

export default function EditCar() {
    const { id } = useParams();
    const [editCar, setEditCar] = useState({});

    useEffect(() => {
        getSingleCar(id).then(setEditCar);
    }, []);

    return (
        <>
            <div className="edit-form-car">
                <h1> Edit Car for {editCar.name} </h1>
                <CarForm obj={editCar} />
            </div>
            </>
        );
}