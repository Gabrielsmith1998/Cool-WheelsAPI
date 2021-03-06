import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleCar from '../Components/SingleCar';
import { getSingleCar } from '../api/data/CarData';

export default function SingleCarView() {
    const [editItem, setEditItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getSingleCar(id).then(setEditItem)
    }, []);
    return (
        <>
            <div className="single-car-view">
                <h1>{editItem.name}</h1>
                <div className="single-car-body">
                    <SingleCar car={editItem} />
                    </div>
            </div>
        </>
        );
}