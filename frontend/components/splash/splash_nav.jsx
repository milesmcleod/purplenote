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
          <li>
            <a
              href="https://milesmcleod.com/"
              target="_blank">
              <div className="miles"></div>
            </a>
          </li>
          <li>
            <a
              href='https://github.com/milesmcleod'
              target="_blank">
              <div className="github"></div>
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/miles-mcleod/'
              target="_blank">
              <div className="linkedin"></div>
            </a>
          </li>
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
