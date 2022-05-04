import React, { useEffect, useState } from 'react';
import { getCars } from '../api/data/CarData';
import CarCards from '../Components/CarCards';

export default function Cars() {
    const [cars, setCars] = useState([]);

    
    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            getCars().then(setCars);
        }
        return () => { isMounted = false; }
    }, []);

    return (
        <div className="d-flex flex-wrap">
            {cars.map((car) => (
                <CarCards
                    key={car.id}
                    car={car}
                    setCars={setCars}
            />
            ))}
        </div>
  );
}
