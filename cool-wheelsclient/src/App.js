import '../src/styles/styles.scss'
import React, { useEffect, useState } from 'react';
import 'firebase/compat/auth';
import PublicRoutes from './Routes/PublicRoutes';
import Navigation from './Components/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { onLoginStatusChange } from './api/authManager';
import { Spinner } from 'reactstrap';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebase from 'firebase/compat/app';
import { getBuyer } from './api/data/BuyerData';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
};
firebase.initializeApp(firebaseConfig);

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        onLoginStatusChange(setIsLoggedIn);

        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                getBuyer(user.uid).then((buyer) => {
                    if (buyer.role === "admin") {
                        setIsAdmin(true);
                    }
                });
            }
        });
    }, [isAdmin]);

    if (isLoggedIn === null) {
        // Until we know whether or not the user is logged in or not, just show a spinner
        return <Spinner className="app-spinner dark"/>;
      }
    
    return (
        <div>
            <Navigation isLoggedIn={isLoggedIn} />
            <PublicRoutes isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
        </div>
    );
}

export default App;
