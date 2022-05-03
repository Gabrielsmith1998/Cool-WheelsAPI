import '../src/styles/styles.scss'
import React, { useEffect, useState } from 'react';
import 'firebase/compat/auth';
import PublicRoutes from './Routes/PublicRoutes';
import Navigation from './Components/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { onLoginStatusChange } from './api/authManager';
import { Spinner } from 'reactstrap';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    useEffect(() => {
        onLoginStatusChange(setIsLoggedIn);
    }, []);

    if (isLoggedIn === null) {
        // Until we know whether or not the user is logged in or not, just show a spinner
        return <Spinner className="app-spinner dark"/>;
      }
    
    return (
        <div>
            <Navigation isLoggedIn={isLoggedIn}/>
            <PublicRoutes isLoggedIn={isLoggedIn} />
        </div>
    );
}

export default App;
