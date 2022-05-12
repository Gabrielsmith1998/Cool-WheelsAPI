import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBuyer } from '../api/data/BuyerData';
import { getCars } from '../api/data/CarData';
import { getTracks } from '../api/data/TrackData';
import BuyerCard from '../Components/BuyerCard';
import CarCard from '../Components/CarCards';
import TrackCards from '../Components/TrackCards';

export default function Profile({ isAdmin }) {
  const [buyer, setBuyer] = useState({});
  const [tracks, setTracks] = useState([]);
  const [cars, setCars] = useState([]);
  const { firebaseUserId } = useParams();

  useEffect(() => {
    let isMounted = true;
    
    if (isMounted) {
      getBuyer(firebaseUserId).then(setBuyer);
    }

    return () => {
      isMounted = false;
    }
  }, [firebaseUserId]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getTracks().then((track) => {
        setTracks(track)
      })
    }
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getCars().then((car) => {
        setCars(car)
      })
    }
    return () => {
      isMounted = false;
    };
  }, []);

  const buyersTracks = tracks.filter((allTracks) => allTracks.buyerId === buyer.id)
  const buyersCars = cars.filter((allCars) => allCars.buyerId === buyer.id)

  return (
    <div className="profile">
      <BuyerCard key={buyer.id} buyer={buyer} isAdmin={isAdmin} />
      <div className="buyer-collection">
        {tracks ? (
          <div className="buyer-tracks">
            <div className="d flex flex-wrap buyer-track">
              <h4>{buyer.name}'s Tracks</h4>
              {buyersTracks.map((tracks) => (
                <TrackCards tracks={tracks} key={tracks.id} setTracks={setTracks} />
              ))}
            </div>
          </div>
        ) : (
          ''
        )}
        {cars ? (
          <div className="buyer-cars">
            <div className="d flex flex-wrap buyer-car">
              <h4>{buyer.name}'s Cars</h4>
              {buyersCars.map((car) => (
                <CarCard car={car} key={car.id} setCars={setCars} />
              ))}
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
