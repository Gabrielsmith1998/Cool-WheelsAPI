import '../src/styles/styles.scss'
import React from 'react';
import PublicRoutes from './Routes/PublicRoutes';
import Navigation from './Components/Navbar.js';

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
