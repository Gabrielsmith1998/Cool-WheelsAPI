import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBuyer } from '../api/data/BuyerData';
import BuyerCard from '../Components/BuyerCard';

export default function Profile() {
  const [buyer, setBuyer] = useState({});
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

  return (
    <div>
      <h1>{buyer.name}'s Profile</h1>
      <BuyerCard key={buyer.id} buyer={buyer} />
    </div>
  );
}
