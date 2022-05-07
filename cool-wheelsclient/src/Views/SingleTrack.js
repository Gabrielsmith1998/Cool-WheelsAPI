import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleTrack } from '../api/data/TrackData';
import TrackCards from '../Components/TrackCards';

export default function SingleTrack() {
const [tracks, setTracks] = useState({});
const { id } = useParams();

useEffect(() => {
  getSingleTrack(id).then(setTracks)
}, []);

return (
    <>
    <div className="single-track-view">
        <div className="single-track-body">
          <TrackCards tracks={tracks} />
        </div>
    </div>
    </>
    );
}
  