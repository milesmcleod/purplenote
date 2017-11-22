import React from 'react';
import { Link } from 'react-router-dom';

class SplashNav extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 575 && this.props.splashNavType !== 'scroll') {
        this.props.receiveSplashNavType('scroll');
      } else if (window.pageYOffset < 575 && this.props.splashNavType === 'scroll') {
        this.props.receiveSplashNavType('regular');
      }
    });
  }

  componentWillReceiveProps(newProps) {
    if (
      this.props.splashNavType !== newProps.splashNavType &&
      newProps.splashNavType === 'scroll'
    ) {
      const button = document.getElementById("splash-change-button");
      const link = document.getElementById("splash-change-link");
      window.setTimeout(() => {
        button.classList.add("splash-change-button-purple");
        button.classList.remove("splash-change-button-back");
      }, 250);
      link.classList.add("splash-change-link-move");
      link.classList.remove("splash-change-link");
    } else if (
      this.props.splashNavType !== newProps.splashNavType &&
      newProps.splashNavType === 'regular'
    ) {
      const button = document.getElementById("splash-change-button");
      const link = document.getElementById("splash-change-link");
      button.classList.add("splash-change-button-back");
      link.classList.add("splash-change-link");
      button.classList.remove("splash-change-button-purple");
      link.classList.remove("splash-change-link-move");
    }
  }

  render () {
    return (
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
            <Link
              to="/login"
              className="splash-link">Log in</Link>
            <Link
              to="/signup"
              id="splash-change-link"
              className="splash-link splash-change-link">Sign up</Link>
            <button id="splash-change-button" className="splash-nav-button">Try Purplenote Business</button>
          </div>
        </div>
      </nav>
    );
  }
}


export default SplashNav;
