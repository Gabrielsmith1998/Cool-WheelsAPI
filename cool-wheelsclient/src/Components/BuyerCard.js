import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { deleteBuyer } from '../api/data/BuyerData';
 

export default function Buyer({ buyer, setBuyers}) {
  const handleClick = (method) => {
    // eslint-disable-next-line no-restricted-globals
    const del = confirm(`Are you sure you want to delete ${buyer.name}?`);
    if (del && method === 'delete') {
      deleteBuyer(buyer).then(setBuyers);
    }
  };

  return (
    <div>
      <div className="card">
        <img classname="card-img-top" src={buyer.image} alt={buyer.name} />
        <div className="card-body">
          <h4 className="card-title">{buyer.name}</h4>
          <h5>@{buyer.userName} | {buyer.email}</h5>
          <p className="card-text">{buyer.about}</p>
          {setBuyers ? (
            <Link to={`/buyers/${buyer.id}`}>
              <button type="button" className="btn btn-primary profile-btn">Profile</button>
            </Link>
          ) : (
            ""
          )}
          <Link to={`/edit-buyer/${buyer.id}`}>
            <button type="button" className="btn btn-primary edit-btn">Edit</button>
          </Link>
          <button type="button" onClick={() => handleClick('delete')}>Delete</button>
        </div>
      </div>
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
