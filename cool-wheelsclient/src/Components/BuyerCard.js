import React from 'react';
import PropTypes from 'prop-types';

export default function Buyer({ buyer }) {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={buyer.image}
        alt={buyer.name}
      />
      <h4>{buyer.name}</h4>
      <h5>{buyer.userName} | {buyer.email}</h5>
      <p>{buyer.about}</p>
    </div>
  );
}

Buyer.propTypes = {
  buyer: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    userName: PropTypes.string,
    email: PropTypes.string,
    about: PropTypes.string
  }).isRequired
}
