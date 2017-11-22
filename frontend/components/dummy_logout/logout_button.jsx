import React from 'react';

const LogoutButton = ({deleteSession}) => (
  <button
    className="dummy-logout"
    onClick={() => deleteSession()}>Log Out</button>
);

export default LogoutButton;
