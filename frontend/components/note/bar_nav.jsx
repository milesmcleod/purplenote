import React from 'react';

class BarNav extends React.Component {
  constructor(props) {
    super(props);
  }

  handleNavChange(type) {
    this.props.setBarNavType(type);
  }

  renderNewNote() {
    this.props.history.push('/home&n=new');
  }



  render() {
    return (
      <nav className='bar-nav'>
        <div
          className='splash-nav-branding-img'></div>
        <ul className='bar-nav-button-list-1'>
          <li
            className="bar-nav-button-new-note"
            onClick={() => {
              this.renderNewNote();
              this.props.enterFullscreen();
            }}><div className="hover-bar-nav-button-new-note"></div></li>
          <li className="bar-nav-button-search">
            <div className="hover-bar-nav-button-search"></div>
          </li>
        </ul>
        <ul className='bar-nav-button-list-2'>
          <li
            className="bar-nav-button-shortcuts"
            onClick={() => this.handleNavChange('shortcuts')}>
            <div className="hover-bar-nav-button-shortcuts"></div>
          </li>
          <li
            className="bar-nav-button-notes"
            onClick={() => this.handleNavChange('notes')}>
            <div className="hover-bar-nav-button-notes"></div>
          </li>
          <li
            className="bar-nav-button-notebooks"
            onClick={() => this.handleNavChange('notebooks')}>
            <div className="hover-bar-nav-button-notebooks"></div>
          </li>
          <li
            className="bar-nav-button-tags"
            onClick={() => this.handleNavChange('tags')}>
            <div className="hover-bar-nav-button-tags"></div>
          </li>
        </ul>
        <div className="bar-nav-user-info">User</div>
      </nav>
    );
  }
}

export default BarNav;
