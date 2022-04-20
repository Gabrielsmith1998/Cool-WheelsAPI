import React from 'react';
import PropTypes from 'prop-types';

// TODO: Insert code in between divs on line 9/10 and 12/13
export default function SignIn({ user }) {
  return (
    <div>
      {user === null ? (
        <div>
        </div>
      ) : (
        <div>
          <h1>Sign In Page</h1>
        </div>
      )}
    </div>
  );
}

SignIn.propTypes = {
  user: PropTypes.node
}

SignIn.defaultProps = {
  user: null
}
