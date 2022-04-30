import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTracks } from '../api/data/TrackData';
import TrackCards from '../Components/TrackCards';

export default function Tracks() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getTracks().then((allTracks) => {
        setTracks(allTracks);
      });
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="tracks">
      <Link to={`/tracks-form`}>
        <button type="button" className="btn btn-success edit-btn">Add</button>
      </Link>
      {tracks ? (
        <>
          <div className="d flex flex-wrap">
            {tracks.map((tracks) => (
              <TrackCards tracks={tracks} key={tracks.id} setTracks={setTracks} />
            ))}
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
}