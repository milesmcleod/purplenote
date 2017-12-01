import React from 'react';

const LogoutButton = ({deleteSession, userName}) => (
  <button
    className="logout-button"
    onClick={() => deleteSession()}>log out {userName}</button>
);

export default LogoutButton;
