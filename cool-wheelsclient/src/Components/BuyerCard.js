import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { deleteBuyer } from '../api/data/BuyerData';
import { getAuth, onAuthStateChanged, deleteUser } from "firebase/auth";
import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
};
firebase.initializeApp(firebaseConfig);

var uid;
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    uid = user.uid;
  }
});

export default function Buyer({ buyer, setBuyers, isAdmin }) {

  const handleClick = (method) => {
    // eslint-disable-next-line no-restricted-globals
    const del = confirm(`Are you sure you want to delete ${buyer.name}?`);
    if (del && method === 'delete') {
      deleteBuyer(buyer).then(setBuyers);
      const user = auth.currentUser;
      deleteUser(user);
    }
  };

  return (
    <div>
      <div className="card buyer-card">
        <img className="card-img-top" src={buyer.image} alt={buyer.name} />
        <div className="card-body buyer-body">
          <h4 className="card-title">{buyer.name}</h4>
          <h5>@{buyer.userName} | {buyer.email}</h5>
          <p className="card-text">{buyer.about}</p>
          <div className="buyer-footer">
          {setBuyers ? (
            <Link to={`/buyers/${buyer.firebaseUserId}`}>
              <button type="button" className="btn btn-primary profile-btn">Profile</button>
            </Link>
          ) : (
            ""
          )}
          {buyer.firebaseUserId === uid || isAdmin ? (
          <>
            <Link to={`/edit-buyer/${buyer.firebaseUserId}`}>
              <button type="button" className="btn btn-primary buyer-edit-btn">Edit</button>
            </Link>
            <button type="button" className="btn btn-danger buyer-delete-btn" onClick={() => handleClick('delete')}>Delete</button>
          </>
          ) : (
            ""
          )}
          </div>
        </div>
      </div>
    </div>
  );
}

Buyer.propTypes = {
  buyer: PropTypes.shape({
    firebaseUserId: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    userName: PropTypes.string,
    email: PropTypes.string,
    about: PropTypes.string,
    role: PropTypes.string
  }).isRequired
}
