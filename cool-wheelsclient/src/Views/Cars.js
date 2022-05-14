import React, { useEffect, useState } from 'react';
import { getCars } from '../api/data/CarData';
import CarCards from '../Components/CarCards';

export default function Cars({ isAdmin }) {
    const [cars, setCars] = useState([]);

    
    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            getCars().then(setCars);
        }
        return () => { isMounted = false; }
    }, []);

    const nullCars = cars.filter((allCars) => allCars.buyerId === null)

    return (
        <div className="d-flex flex-wrap">
            {nullCars.map((car) => (
                <CarCards
                    key={car.id}
                    car={car}
                    setCars={setCars}
                    isAdmin={isAdmin}
            />
            ))}
        </div>
  );
}
