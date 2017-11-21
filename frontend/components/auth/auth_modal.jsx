import React from 'react';
import { Link } from 'react-router-dom';

class AuthModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  componentWillMount() {
    this.props.clearSessionErrors();
    console.log(this.props.formType);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.clearSessionErrors();
    this.props.post(user);
    this.setState({
      name: "",
      password: ""
    });
  }

  handleChange(e) {
    const type = e.target.name;
    this.setState({
      [type]: e.target.value
    });
  }

  render() {
    let header;
    let emailText;
    let passwordText;
    let submitText;
    let signupClause;
    let forgotText;
    let forgotLinkText;
    let forgotLinkPath;
    if (this.props.formType === 'signup') {
      header = 'Create Account';
      emailText = 'Your Email Address';
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
      header = 'Log In';
      emailText = 'Email or Username';
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
          onSubmit={(e) => this.handleSubmit(e)}
          className="auth-modal-form">
          <button className="auth-modal-submit">Demo User</button>
          <div className="auth-break">
            <hr></hr><p>or</p><hr></hr>
          </div>
          <input
            type="text"
            name="email"
            placeholder={emailText}
            className="auth-modal-input"
            value={this.state.email}
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
            className="auth-modal-submit"/>
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
