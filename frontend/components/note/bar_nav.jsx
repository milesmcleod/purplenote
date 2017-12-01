import React from 'react';
import LogoutButtonContainer from '../user/logout_button_container';
import UserImageContainer from '../user/user_image_container';

class BarNav extends React.Component {
  constructor(props) {
    super(props);
  }

  handleNavChange(type) {
    if (
      this.props.barNavType !== 'notebooks' &&
      this.props.selectedNotebook &&
      this.props.barNavType === type
    ) {
      this.props.setBarNavType('notes');
      this.props.selectNotebook(undefined);
    } else if (
      this.props.barNavType !== 'tags' &&
      this.props.selectedTag &&
      this.props.barNavType === type
    ) {
      this.props.setBarNavType('notes');
      this.props.selectTag(undefined);
    } if (this.props.barNavType === type ) {
      this.props.setBarNavType('notes');
    } else {
      this.props.setBarNavType(type);
    }
  }

  renderNewNote() {
    this.props.history.push('/home&n=new');
  }

  renderSearch() {
    this.props.setBarNavType('notes');
    this.props.history.push('home&n=search');
  }

  componentWillReceiveProps(newProps) {
    let selectedIcon = document.getElementsByClassName(`bar-nav-button-${this.props.barNavType}`)[0];
    if (selectedIcon.classList.contains("selected-nav-button")) {
      selectedIcon.classList.remove("selected-nav-button");
    }
    if (
      newProps.barNavType !== this.props.barNavType
    ) {
      selectedIcon = document.getElementsByClassName(`bar-nav-button-${newProps.barNavType}`)[0];
      selectedIcon.classList.add("selected-nav-button");
    }
  }



  render() {
    return (
      <nav className='bar-nav'>
        <div
          className='splash-nav-branding-img bar-gecko'></div>
        <ul className='bar-nav-button-list-1'>
          <li
            className="bar-nav-button-new-note"
            onClick={() => {
              this.renderNewNote();
              window.setTimeout(()=> this.props.enterFullscreen(), 20);
            }}><div className="hover-bar-nav-button-new-note"></div></li>
          <li className="bar-nav-button-search">
            <div
              className="hover-bar-nav-button-search"
              onClick={() => this.renderSearch()}
              ></div>
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
        <LogoutButtonContainer />
        <UserImageContainer />
        <div className="bar-nav-user-info"></div>
      </nav>
    );
  }
}

export default BarNav;
