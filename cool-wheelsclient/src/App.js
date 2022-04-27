import './App.css';
import React from 'react';
import Navigation from './Components/Navbar.js';
import PublicRoutes from './Routes';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div>
            <Navigation />
            <PublicRoutes />
        </div>
    );
}

export default App;
