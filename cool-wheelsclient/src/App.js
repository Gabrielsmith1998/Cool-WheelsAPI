import './App.css';
import React, { useEffect, useState } from 'react';
import getBuyers from './api/data/buyerData';

function App() {
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
        <div className="App">
            {buyers.length ? (
                buyers.map((buyer) => (
                    <h1>Buyer: ${buyer}</h1>
                ))
            ) : (
                <h1>No Buyers</h1>
            )}
        </div>
    );
}

export default App;
