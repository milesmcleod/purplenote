import React from 'react';
import NotesNavItem from './notes_nav_item';
import { Link } from 'react-router-dom';

class NotesNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: undefined,
      notes: this.props.notes
    };
  }

  // sorting options, will come through props via ui state (add that)

  comparator(property, backwards) {
    let a, b;
    return function (x, y) {
      a = (typeof x[property] === 'string') ?
       x[property].toLowerCase() : x[property];
      b = (typeof y[property] === 'string') ?
       y[property].toLowerCase() : y[property];
      if (a > b) {
        if (backwards) {
          return -1;
        } else {
          return 1;
        }
      } else {
        if (backwards) {
          return 1;
        } else {
          return -1;
        }
      }
    };
  }

  sortNotes(notes, property, backwards) {
    notes.sort(this.comparator(property, backwards));
    this.setState({
      notes
    });
  }

  handleSort(notes, e) {
    const arr = e.target.value.split(" ");
    this.props.receiveNoteSortType(arr);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.barNavType === 'notes') {
      this.sortNotes(newProps.notes, ...newProps.noteSortType); //sorting here
      this.setState({header: (
        <header className="plain-notes-header">
          <h4>NOTES</h4>
          <p>{newProps.notes.length} notes</p>
            <form className="note-sort-dropdown">
              <select onChange={(e) => this.handleSort(newProps.notes, e)}>
                <option defaultValue disabled>Sort By</option>
                <option value="createdAt">Date created (oldest first)</option>
                <option value="createdAt true">Date created (newest first)</option>
                <option value="updatedAt">Date updated (oldest first)</option>
                <option value="updatedAt true">Date updated (newest first)</option>
                <option value="title">Title (ascending)</option>
                <option value="title true">Title (descending)</option>
              </select>
            </form>
        </header>
      )});
    }
  }


  render() {
    return (
      <div className='notes-nav-container'>
        {this.state.header}
        <div id='notes-nav' className='notes-nav'>
          {
            this.props.notes.map(note => (
              <div onClick={() => (this.props.history.push(`/home&n=${note.id}`))
                }>
                <NotesNavItem
                  receiveSelectedNote={this.props.receiveSelectedNote}
                  note={note}
                  key={note.id}
                  id={note.id}
                  />
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default NotesNav;
