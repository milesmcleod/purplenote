import React from 'react';
import { Link } from 'react-router-dom';
import SplashNav from './splash_nav';
import SplashBody from './splash_body';
import SplashFooter from './splash_footer';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="splash">
        <SplashNav />
        <SplashBody />
        <SplashFooter />
      </div>
    );
  }

}

export default Splash;
