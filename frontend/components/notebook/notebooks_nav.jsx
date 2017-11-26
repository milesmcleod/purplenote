import React from 'react';

class NotebooksNav extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps (newProps) {
    if (newProps.barNavType === 'notebooks') {
      const nav = document.getElementById('notebooksNav');
      nav.classList.add('secondary-nav-container-show');
      if (this.props.barNavType === 'notes') {
        const modal = document.getElementById('modalBackground');
        modal.classList.add('secondary-nav-background-show');
      }
    } else {
      const nav = document.getElementById('notebooksNav');
      nav.classList.remove('secondary-nav-container-show');
      if (newProps.barNavType === 'notes') {
        const modal = document.getElementById('modalBackground');
        modal.classList.remove('secondary-nav-background-show');
      }
    }
  }

  render () {
    return (
      <div>
        <div id = 'notebooksNav' className='secondary-nav-container'></div>
        <div
          id = 'modalBackground'
          className='secondary-nav-background'
          onClick={(e) => this.props.setBarNavType('notes')}
          ></div>
      </div>
    );
  }
}

export default NotebooksNav;
