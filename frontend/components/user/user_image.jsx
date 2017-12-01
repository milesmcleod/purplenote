import React from 'react';

class UserImage extends React.Component {
  constructor(props) {
    super(props);
    this.listener = this.listener.bind(this);
  }

  listener (e) {
    const logout= document.getElementsByClassName("logout-button")[0];
    if (e.target.id === "user-image") {
      if (logout.classList.contains('show-logout')) {
        logout.classList.remove('show-logout');
      } else {
        logout.classList.add('show-logout');
      }
    } else {
      logout.classList.remove('show-logout');
    }
  }

  componentDidMount () {
    document.addEventListener('click', this.listener);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.listener);
  }

  render() {
    return (
      <div className="user-image">
        <img id="user-image" src={this.props.url}></img>
      </div>
    );
  }
}

export default UserImage;
