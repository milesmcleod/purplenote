import React from 'react';
import { Link } from 'react-router-dom';

class AuthModal extends React.Component {
  constructor(props) {
    super(props);
    this.demoUsername = [
      'd', 'e', 'm', 'o', '_', 'u', 's', 'e', 'r', '@',
      'd', 'e', 'm', 'o', '.', 'c', 'o', 'm'
    ];
    this.demoPassword = [
      '1', '2', '3', '4', '5', '6', '7', '8', '9'
    ];
    if (this.props.formType === 'signup') {
      this.state = {
        email: "",
        password: ""
      };
      this.demo_user = {
        name: "demo_user@demo.com",
        password: "password"
      };
    } else {
      this.state = {
        name: "",
        password: ""
      };
      this.demo_user = {
        name: "demo_user",
        password: "password"
      };
    }
  }

  componentWillMount() {
    this.props.clearSessionErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.clearSessionErrors();
    this.props.post(user);
    if (this.props.formType === 'signup') {
      this.setState ({
        email: "",
        password: ""
      });
    } else {
      this.setState ({
        name: "",
        password: ""
      });
    }
  }

  handleChange(e) {
    const type = e.target.name;
    this.setState({
      [type]: e.target.value
    });
  }

  animateUsername() {
    window.setTimeout(() => {
      let name = (this.props.formType === 'signup') ? 'email' : 'name';
      let newName = this.state[name] + this.demoUsername.shift();
      this.setState({
        [name]: newName
      });
      if (this.demoUsername.length > 0) {
        this.animateUsername();
      } else {
        window.setTimeout(()=>{
          this.animatePassword();
        }, 300);
      }
    }, 90);
  }

  animatePassword() {
    let newPassword = this.state.password + this.demoPassword.shift();
    window.setTimeout(() => {
      this.setState({
        password: newPassword
      });
      if (this.demoPassword.length > 0) {
        this.animatePassword();
      } else {
        window.setTimeout(()=> this.props.postSession(this.demo_user), 500);
      }
    }, 90);
  }

  handleDemo(e) {
    e.preventDefault();
    this.props.clearSessionErrors();
    this.animateUsername();
  }

  render() {
    let header;
    let identityText;
    let identityInputName;
    let passwordText;
    let submitText;
    let signupClause;
    let forgotText;
    let forgotLinkText;
    let forgotLinkPath;
    if (this.props.formType === 'signup') {
      header = 'Create Account';
      identityText = 'Your Email Address';
      identityInputName = 'email';
      passwordText = 'Create a Password';
      submitText = 'Create Account';
      signupClause = <p className="signup-clause">
        By clicking Create Account, I agree to
        the <a href="#/signup">Terms of Service
        </a> and <a href="#/signup">Privacy Policy.</a>
      </p>;
      forgotText = 'Already have an account?';
      forgotLinkText = 'Sign in';
      forgotLinkPath = '/login';
    } else {
      header = 'Sign In';
      identityText = 'Email or Username';
      identityInputName = 'name';
      passwordText = 'Password';
      submitText = 'Continue';
      signupClause = <p></p>;
      forgotText = 'Don\'t have an account?';
      forgotLinkText = 'Create account';
      forgotLinkPath = '/signup';
    }
    return (
      <div className="auth-modal-wrapper">
        <div className="purple-bar"></div>
          <div className="auth-logo"></div>
          <h1>{header}</h1>
        <form
          className="auth-modal-form">
          <button
            className="auth-modal-submit"
            onClick={(e) => this.handleDemo(e)}>
            Demo User</button>
          <div className="auth-break">
            <hr></hr><p>or</p><hr></hr>
          </div>
          <input
            type="text"
            name={identityInputName}
            placeholder={identityText}
            className="auth-modal-input"
            value={this.state[identityInputName]}
            onChange={(e) => this.handleChange(e)}/>
          <input
            type="password"
            name="password"
            placeholder={passwordText}
            className="auth-modal-input"
            value={this.state.password}
            onChange={(e) => this.handleChange(e)}/>
          <div className="auth-errors">
            <ul>
            {
              this.props.sessionErrors.map(err => <li key={err}>{err}</li>)
            }
            </ul>
          </div>
          {signupClause}
          <input
            type="submit"
            value={submitText}
            className="auth-modal-submit"
            onClick={(e) => this.handleSubmit(e)}/>
        </form>
        <p className="forgot">{forgotText}</p>
        <Link
          className="forgot-link"
          to={forgotLinkPath}>{forgotLinkText}</Link>
      </div>
    );
  }
}

export default AuthModal;
