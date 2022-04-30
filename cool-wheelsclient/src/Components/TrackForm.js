import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { createTrack, getSingleTrack, updateTrack } from '../api/data/TrackData';

const initialState = {
  name: '',
  price: '',
  imageUrl: '',
  buyerId: '',
  id: '',
};

export default function TrackForm() {
  const { id } = useParams();
  const [formInput, setFormInput] = useState(initialState);

  const Navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getSingleTrack(id).then((obj) => {
        setFormInput({
          name: obj.name,
          price: obj.price,
          imageUrl: obj.imageUrl,
          buyerId: obj.buyerId,
          id: obj.id
        });
      });
    } else {
      setFormInput(initialState);
    }
  }, []);

  const handleName = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  };

  const handlePrice = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      price: e.target.value,
    }));
  };

  const handleImageUrl = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      imageUrl: e.target.value,
    }));
  };

  const handleBuyerId = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      buyerId: Number(e.target.value),
    }));
  };

  const handleId = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      id: Number(e.target.value),
    }));
  };

  const resetForm = () => {
    setFormInput(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateTrack(formInput).then(() => {
        resetForm();
        Navigate("/tracks");
      });
    } else {
      createTrack(formInput).then(() => {
        resetForm();
        Navigate('/tracks');
      });
    }
  };

  return (
    <div className="scout-form">
      <form onSubmit={handleSubmit} className="scout-form">
        <input
          placeholder="Track Name"
          onChange={handleName}
          value={formInput.name}
        />
        <br />
        <input
          placeholder="Track Price"
          onChange={handlePrice}
          value={formInput.price}
        />
        <br />
        <input
          placeholder="Image Url"
          onChange={handleImageUrl}
          value={formInput.imageUrl}
        />
        <br />
        <input
          placeholder="Buyer ID"
          onChange={handleBuyerId}
          value={formInput.buyerId}
        />
        <input
          placeholder="ID"
          onChange={handleId}
          value={formInput.id}
        />
        <br />
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
}