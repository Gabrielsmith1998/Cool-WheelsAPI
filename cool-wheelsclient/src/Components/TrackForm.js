import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const initialState = {
  name: '',
  price: '',
  imageUrl: '',
  buyerId: '',
  id: ''
};

export default function TrackForm({ tracks }) {
  const [formInput, setFormInput] = useState(initialState);

  const history = useHistory();

  useEffect(() => {
    if (tracks.id) {
      getSingleTrack(tracks.id).then((obj) => {
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
      title: e.target.value,
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
      buyerId: e.target.value,
    }));
  };

  const resetForm = () => {
    setFormInput(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tracks.id) {
      updateTrack(formInput).then(() => {
        resetForm();
        history.push('/');
      });
    } else {
      createTrack(formInput).then(() => {
        resetForm();
        history.push('/');
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
        <br />
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
}

TrackForm.propTypes = {
    tracks: PropTypes.shape(PropTypes.obj).isRequired,
};