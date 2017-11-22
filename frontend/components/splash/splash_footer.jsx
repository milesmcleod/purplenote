import React from 'react';

const SplashFooter = (props) => (
  <div className="splash-footer">
    <ul className="footer-nav">
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
);

export default SplashFooter;
