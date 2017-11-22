import React from 'react';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.demo_user = {
      name: "demo_user@demo.com",
      password: "password"
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
    this.props.postUser(user);
    this.setState ({
      email: "",
      password: ""
    });
  }

  handleChange(e) {
    const type = e.target.name;
    this.setState({
      [type]: e.target.value
    });
  }

  handleDemo(e) {
    e.preventDefault();
    this.props.clearSessionErrors();
    this.props.postSession(this.demo_user);

  }

  render() {
    return (
      <div className="splash-signup">
        <article className="splash-signup-header">
          <h1>Say hello to Purplenote.</h1>
          <p>Capture, organize, and share notes from anywhere. Your
            best ideas are always with you and always in sync.</p>
        </article>
        <form

          className="splash-signup-form">
          <h2>Sign up for free</h2>
          <button
            className="splash-signup-form-demo"
            onClick={(e) => this.handleDemo(e)}>
            Demo User</button>
          <div className="splash-signup-break">
            <hr></hr><p>Or</p><hr></hr>
          </div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="splash-signup-input"
            value={this.state.email}
            onChange={(e) => this.handleChange(e)}/>
          <input
            type="password"
            name="password"
            placeholder="Create a Password"
            className="splash-signup-input"
            value={this.state.password}
            onChange={(e) => this.handleChange(e)}/>
          <div className="splash-signup-errors">
            <ul>
            {
              this.props.sessionErrors.map(err => <li key={err}>{err}</li>)
            }
            </ul>
          </div>
          <p className="splash-signup-clause">
            By clicking Create Account, I agree to
            the <a href="#/signup">Terms of Service
            </a> and <a href="#/signup">Privacy Policy.</a>
          </p>
          <input
            type="submit"
            value='Create Account'
            className="splash-signup-form-submit"
            onClick={(e) => this.handleSubmit(e)}/>
        </form>
      </div>
    );
  }
}

export default SignUp;
