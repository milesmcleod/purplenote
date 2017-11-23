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
    return function (x, y) {
      if (x[property] > y[property]) {
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

  componentWillReceiveProps(newProps) {
    if (newProps.barNavType === 'notes') {
      console.log(newProps.notes);
      this.sortNotes(newProps.notes, 'title', true);
      console.log(newProps.notes);
      this.setState({header: (
        <header className="plain-notes-header">
          <h4>NOTES</h4>
          <p>{newProps.notes.length} notes</p>
        </header>
      )});
    }
  }

  componentDidMount() {
    if (this.props.barNavType === 'notes') {
      this.setState({header: (
        <header className="plain-notes-header">
          <h4>NOTES</h4>
          <p>{this.props.notes.length} notes</p>
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
