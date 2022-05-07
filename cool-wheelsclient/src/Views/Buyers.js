import React, { useState, useEffect } from 'react';
import { getBuyers } from '../api/data/BuyerData';
import BuyerCard from '../Components/BuyerCard';

export default function Buyers({ isAdmin }) {
  const [buyers, setBuyers] = useState([]);

  useEffect(() => {
    let isMounted = true;
    
    if (isMounted) {
      getBuyers().then(setBuyers);
    }

    return () => {
      isMounted = false;
    }
  }, []);

  return (
    <div>
      <h1>Buyers Page</h1>
      <div id="buyer-container">
        {buyers.length ? (
          buyers.map((buyer) => (
            <BuyerCard key={buyer.id} buyer={buyer} setBuyers={setBuyers} isAdmin={isAdmin} />
          ))
        ) : (
          <h1>No Buyers</h1>
        )}
      </div>
    </div>
  );
}
