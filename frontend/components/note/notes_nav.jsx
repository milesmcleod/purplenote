import React from 'react';
import NotesNavItem from './notes_nav_item';

class NotesNav extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.barNavType === 'notes') {
      this.header = (
        <header className="plain-notes-header">
          <h4>NOTES</h4>
          <p>{newProps.notes.length} notes</p>
        </header>
      );
    }
  }

  render() {
    return (
      <div className='notes-nav'>
        {this.header}
        {
          this.props.notes.map(note => (
            <NotesNavItem note={note} key={note.id}/>
          ))
        }
      </div>
    );
  }
}

export default NotesNav;
