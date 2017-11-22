import React from 'react';
import { Link } from 'react-router-dom';
import SplashNavContainer from './splash_nav_container';
import SplashBody from './splash_body';
import SplashFooter from './splash_footer';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.navType = 'regular';
  }

  render() {
    return (
      <div className="splash">
        <SplashNavContainer />
        <SplashBody />
        <SplashFooter />
      </div>
    );
  }

}

export default Splash;
