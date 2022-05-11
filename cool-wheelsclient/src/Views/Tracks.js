import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTracks } from '../api/data/TrackData';
import TrackCards from '../Components/TrackCards';

export default function Tracks({ isAdmin }) {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getTracks().then((allTracks) => {
        setTracks(allTracks)
      });
    }
    return () => {
      isMounted = false;
    };
  }, []);

  const buyTracks = tracks.filter((allTracks) => allTracks.buyerId === null)

  return (
    <div className="tracks">
      {isAdmin ? (<>      
      <Link to={`/tracks-form`}>
        <button type="button" className="btn btn-success edit-btn">Add</button>
      </Link></>
      ) : (
        ""
      )}
      {tracks ? (
        <>
          <div className="d flex flex-wrap">
            {buyTracks.map((tracks) => (
              <TrackCards tracks={tracks} key={tracks.id} setTracks={setTracks} isAdmin={isAdmin} />
            ))}
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
}