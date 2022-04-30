import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBuyer } from '../api/data/BuyerData';
import { getTracks } from '../api/data/TrackData';
import BuyerCard from '../Components/BuyerCard';
import TrackCards from '../Components/TrackCards';

export default function Profile() {
  const [buyer, setBuyer] = useState({});
  const [tracks, setTracks] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    let isMounted = true;
    
    if (isMounted) {
      getBuyer(id).then(setBuyer);
    }

    return () => {
      isMounted = false;
    }
  }, [id]);

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

  const buyersTracks = tracks.filter((allTracks) => allTracks.buyerId === buyer.id)

  return (
    <div>
      <h1>{buyer.name}'s Profile</h1>
      <BuyerCard key={buyer.id} buyer={buyer} />
      {tracks ? (
        <>
          <div className="d flex flex-wrap">
            <h4>{buyer.name}'s Tracks</h4>
            {buyersTracks.map((tracks) => (
              <TrackCards tracks={tracks} key={tracks.id} setTracks={setTracks} />
            ))}
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
}
