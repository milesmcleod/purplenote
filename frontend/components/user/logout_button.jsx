import React from 'react';

const LogoutButton = ({deleteSession}) => (
  <button
    className="logout-button"
    onClick={() => deleteSession()}>Log Out</button>
);

export default LogoutButton;
