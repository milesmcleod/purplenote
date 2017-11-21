import React from 'react';
import { Link } from 'react-router-dom';

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.postUser(user);
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
    return (
      <div className="auth-modal-wrapper">
        <div className="purple-bar"></div>
          <div className="auth-logo"></div>
          <h1>Create Account</h1>
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
            placeholder="Your Email Address"
            className="auth-modal-input"
            value={this.state.email}
            onChange={(e) => this.handleChange(e)}/>
          <input
            type="password"
            name="password"
            placeholder="Create a Password"
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
          <p className="signup-clause">
            By clicking Create Account, I agree to
            the <a href="#/signup">Terms of Service
            </a> and <a href="#/signup">Privacy Policy.</a>
          </p>
          <input
            type="submit"
            value="Create Account"
            className="auth-modal-submit"/>
        </form>
        <p className="forgot">Already have an account?</p>
        <Link className="forgot-link" to="/login">Sign in</Link>
      </div>
    );
  }
}

export default SignUpModal;
