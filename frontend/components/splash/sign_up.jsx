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
    this.demoUsername = [
      'd', 'e', 'm', 'o', '_', 'u', 's', 'e', 'r', '@',
      'd', 'e', 'm', 'o', '.', 'c', 'o', 'm'
    ];
    this.demoPassword = [
      '1', '2', '3', '4', '5', '6', '7', '8', '9'
    ];
  }

  componentWillMount() {
    this.props.clearSessionErrors();
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

  animateUsername() {
    window.setTimeout(() => {
      let name = 'email';
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
    return (
      <div className="splash-signup">
        <article className="splash-signup-header">
          <h1>Say hello to Purplenote.</h1>
          <p>Jot. Compose. Perfect. Share. <br></br> All your notes,
            everywhere you go.</p>
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
