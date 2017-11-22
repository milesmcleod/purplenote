import React from 'react';
import { Link } from 'react-router-dom';

const SplashNav = (props) => (
  <nav className="splash-nav-container">
    <div className="splash-nav">
      <div className="splash-nav-left">
        <div className="splash-nav-branding">
          <div className="splash-nav-branding-img">
          </div>
          <h1>PURPLENOTE</h1>
        </div>
        <ul>
          <li>Explore</li>
          <li>Link</li>
          <li>Link</li>
        </ul>
      </div>
      <div className="splash-nav-right">
        <Link to="/login">Log in</Link>
        <button>Try Purplenote Business</button>
      </div>
    </div>
  </nav>
);


export default SplashNav;
