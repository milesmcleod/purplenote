import React from 'react';
import { Link } from 'react-router-dom';
import SignUpContainer from './sign_up_container';
import WhyPurplenote from './why_purplenote';

const SplashBody = ({  }) => (
  <section className="splash-body-container">
    <section className="splash-body">
      <SignUpContainer />
      <WhyPurplenote />
    </section>
  </section>
);


export default SplashBody;
