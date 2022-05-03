import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h1>Welcome To Cool-Wheels</h1>
            <h4>Your one stop destination for Hot-Wheel Tracks and Cars!</h4>
            <div>
            <Link to={`/tracks`}>
                  <button type="button" className="btn btn-success">View Tracks</button>
            </Link>
            </div>
            <div>
            <Link to={`/cars`}>
                  <button type="button" className="btn btn-success">View Cars</button>
            </Link>
            </div>
        </div>
    );
}
