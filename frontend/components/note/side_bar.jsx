import React from 'react';
import BarNavContainer from './bar_nav_container';
import NotesNavContainer from './notes_nav_container';
import NotebooksNavContainer from '../notebook/notebooks_nav_container';

class SideBar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className='side-bar'>
        <BarNavContainer />
        <NotesNavContainer />
        <NotebooksNavContainer />
      </div>
    );
  }
}

export default SideBar;
