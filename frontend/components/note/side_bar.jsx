import React from 'react';
import BarNavContainer from './bar_nav_container';
import NotesNavContainer from './notes_nav_container';

class SideBar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className='side-bar'>
        <BarNavContainer />
        {
          (this.props.barNavType === 'notes') ? (
            <NotesNavContainer />
          ) : (
            <div></div>
          )
        }
      </div>
    );
  }
}

export default SideBar;
