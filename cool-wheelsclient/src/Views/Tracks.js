import React, { useEffect, useState } from 'react';
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