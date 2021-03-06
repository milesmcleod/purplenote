import React from 'react';
import BarNavContainer from './bar_nav_container';
import NotesNavContainer from './notes_nav_container';
import NotebooksNavContainer from '../notebook/notebooks_nav_container';
import TagsNavContainer from '../tag/tags_nav_container';
import ShortcutsNavContainer from '../shortcut/shortcuts_nav_container';

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
        <TagsNavContainer />
        <ShortcutsNavContainer />
      </div>
    );
  }
}

export default SideBar;
