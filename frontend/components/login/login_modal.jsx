import React from 'react';
import { Link } from 'react-router-dom';

class LogInModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.postSession(user);
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
        <h1>Log in</h1>
        <form
          onSubmit={(e) => this.handleSubmit(e)}
          className="auth-modal-form">
          <button className="auth-modal-submit">Demo User</button>
          <div className="auth-break">
            <hr></hr><p>or</p><hr></hr>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Email or Username"
            className="auth-modal-input"
            value={this.state.email}
            onChange={(e) => this.handleChange(e)}/>
          <input
            type="password"
            name="password"
            placeholder="Password"
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
          <input
            type="submit"
            value="Continue"
            className="auth-modal-submit"/>
        </form>
        <p className="forgot">Don't have an account?</p>
        <Link className="forgot-link" to="/signup">Create account</Link>
      </div>
    );
  }
}

export default LogInModal;
