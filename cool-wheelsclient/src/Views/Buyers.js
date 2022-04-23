import React, { useState, useEffect } from 'react';
import getBuyers from '../api/data/buyerData';
import BuyerCard from '../Components/BuyerCard';

export default function Buyers() {
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
      <div>
        {buyers.length ? (
          buyers.map((buyer) => (
            <BuyerCard key={buyer.id} buyer={buyer} setBuyers={setBuyers} />
          ))
        ) : (
          <h1>No Buyers</h1>
        )}
      </div>
    </div>
  );
}
