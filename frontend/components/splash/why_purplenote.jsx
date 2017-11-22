import React from 'react';
import { Link } from 'react-router-dom';

const WhyPurplenote = (props) => (
  <section className="why-purplenote">
    <div className="pitch-zone">
      <article className="pitch">
        <div className="pitch-img-1">
        </div>
        <div className="pitch-text">
          <h2>
            Take Your Productivity to New Heights
          </h2>
          <p>
            Access your compositions swiftly. Use shortcuts to put the
            pen to the right page, right when you need it.
          </p>
          <Link to="/signup">Create Your Free Account</Link>
          <div className="purple-underline"></div>
        </div>
      </article>
      <article className="pitch">
        <div className="pitch-text">
          <h2>
            Everything in One Place
          </h2>
          <p>
            All your notebook, at your fingertips. To-do lists?
            Lyrics? Quotes you overheard on the train? All right here,
            all organized, all ready to go.
          </p>
          <Link to="/signup">Create Your Free Account</Link>
          <div className="purple-underline"></div>
        </div>
        <div className="pitch-img-2">
        </div>
      </article>
      <article className="pitch">
        <div className="pitch-img-3">
        </div>
        <div className="pitch-text">
          <h2>
            Divide and conquer
          </h2>
          <p>
            Share the workload, quickly and easily. Compare notes, chat,
            and collaborate with ease.
          </p>
          <Link to="/">Learn about Purplenote Business</Link>
          <div className="purple-underline-2"></div>
        </div>
      </article>
    </div>
    <div className="final-signup-div">
      <h2>
        Purplenote is taking the world by storm. Find out why.
      </h2>
      <Link to='/signup' className="final-link-button">Sign up for free</Link>
    </div>
  </section>
);

export default WhyPurplenote;
