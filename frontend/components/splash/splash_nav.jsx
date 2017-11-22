import React from 'react';
import { Link } from 'react-router-dom';

class SplashNav extends React.Component {
  constructor(props) {
    super(props);
    this.dropdownBoolean = false;
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

  dropdown() {

    const blur = document.getElementById('blur');
    const dropdown = document.getElementById('dropdown');
    if (!this.dropdownBoolean) {
      blur.classList.remove('dropdown-blur-transition-back');
      dropdown.classList.remove("splash-nav-dropdown-transition-back");
      window.setTimeout(() => {
        blur.classList.add('dropdown-blur-transition');
        dropdown.classList.add('splash-nav-dropdown-transition');
      }, 0);
      blur.classList.add('dropdown-blur-show');
      dropdown.classList.add('splash-nav-dropdown-show');
      this.dropdownBoolean = true;
    } else {
      blur.classList.add('dropdown-blur-transition-back');
      dropdown.classList.add('splash-nav-dropdown-transition-back');
      window.setTimeout(() => {
        blur.classList.remove('dropdown-blur-transition');
        blur.classList.remove('dropdown-blur-show');
        dropdown.classList.remove('splash-nav-dropdown-show');
        dropdown.classList.remove('splash-nav-dropdown-transition');
      }, 400);
      this.dropdownBoolean = false;
    }
  }

  componentWillReceiveProps(newProps) {
    if (
      this.props.splashNavType !== newProps.splashNavType &&
      newProps.splashNavType === 'scroll'
    ) {
      const button = document.getElementById("splash-change-button");
      const link = document.getElementById("splash-change-link");
      window.setTimeout(() => {
        button.classList.remove("splash-change-button-purple");
        button.classList.add("splash-change-button-purple");
        button.classList.remove("splash-change-button-back");
      }, 250);
      link.classList.remove("splash-change-link-move");
      link.classList.remove("splash-change-link-disappear");
      link.classList.remove("splash-change-link-slide");
      link.classList.add("splash-change-link-move");
    } else if (
      this.props.splashNavType !== newProps.splashNavType &&
      newProps.splashNavType === 'regular'
    ) {
      const button = document.getElementById("splash-change-button");
      const link = document.getElementById("splash-change-link");
      link.classList.add("splash-change-link-disappear");
      window.setTimeout(() => {
        link.classList.add("splash-change-link-slide");
      }, 300);
      window.setTimeout(() => {
        button.classList.add("splash-change-button-back");
      }, 400);
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
        <div className='hamburger-icon' onClick={() => this.dropdown()}>
          <div id='blur' className='dropdown-blur'></div>
        </div>
        <div id='dropdown' className='splash-nav-dropdown'>
          <ul>
            <li>
              <Link
                to="/login"
                className="splash-link-d"> Log in</Link>
              <div
                className='x'
                onClick={() => this.dropdown()}>
              </div>
            </li>
            <li>
              <button id="splash-change-button" className="splash-nav-button">Try Purplenote Business</button>
            </li>
            <li>
              <a
                href="https://milesmcleod.com/"
                target="_blank">
                <div className="miles-d"></div>
              </a>
            </li>
            <li>
              <a
                href='https://github.com/milesmcleod'
                target="_blank">
                <div className="github-d"></div>
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/miles-mcleod/'
                target="_blank">
                <div className="linkedin-d"></div>
              </a>
            </li>
            <li>
              <div className="splash-nav-branding-img">
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}


export default SplashNav;
