import React, { useState, useEffect } from 'react';
import { getBuyers } from '../api/data/BuyerData';
import BuyerCard from '../Components/BuyerCard';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
};
firebase.initializeApp(firebaseConfig);

var uid;
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    uid = user.uid;
  }
});

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
      <div id="buyer-container">
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
