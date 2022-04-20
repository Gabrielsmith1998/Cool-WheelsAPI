import React from 'react';
import PropTypes from 'prop-types';

export default function Authenticated({ user }) {
  return (
    <div>
      <h1>Sign Out Page</h1>
    </div>
  );
}

Authenticated.propTypes = {
  user: PropTypes.objectOf({
    fullName: PropTypes.string,
    photo: PropTypes.string,
  }).isRequired
}
