import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleTrack } from '../api/data/TrackData';
import TrackForm from '../Components/TrackForm';

export default function EditTrack() {
  const { id } = useParams();
  const [editTrack, setEditTrack] = useState({});

  useEffect(() => {
    getSingleTrack(id).then(setEditTrack);
  }, []);

  return (
    <>
      <h1 className="page-header">Edit Tracks</h1>
      <div className="form-container">
        <TrackForm tracks={editTrack} />
      </div>
    </>
  );
}