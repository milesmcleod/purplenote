import React from 'react';
import { Link } from 'react-router-dom';
import SplashNav from './splash_nav';
import SplashBody from './splash_body';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="splash">
        <SplashNav />
        <SplashBody />
        <footer className="splash-footer">

        </footer>
      </div>
    );
  }

}

export default Splash;
