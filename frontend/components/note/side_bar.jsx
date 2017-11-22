import React from 'react';
import BarNavContainer from './bar_nav_container';
import NotesNavContainer from './notes_nav_container';

const SideBar = (props) => {
  console.log(props.barNavType);
  return (
    <div className='side-bar'>
      <BarNavContainer />
      {
        (props.barNavType === 'notes') ? (
          <NotesNavContainer />
        ) : (
          <div></div>
        )
      }
    </div>
  );
};

export default SideBar;
