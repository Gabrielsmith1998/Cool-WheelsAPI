import React from 'react';
import PropTypes from 'prop-types';

export default function Buyer({ buyer }) {
  return (
    <div className="card">
      Hello
      <img
        className="card-img-top"
        src={buyer.image}
        alt={buyer.name}
      />
      <div className="card-body">
        <h5 className="card-title">Albert</h5>
      </div>
    </div>
  );
}

Buyer.propTypes = {
  buyer: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string
  }).isRequired
}
