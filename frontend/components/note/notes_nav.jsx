import React from 'react';
import NotesNavItem from './notes_nav_item';
import { Link } from 'react-router-dom';

class NotesNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: undefined,
      notes: this.props.notes,
      selectedId: null
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
    e.stopPropagation();
    const arr = e.target.id.split(" ");
    this.toggleDropdown();
    this.props.receiveNoteSortType(arr);
  }

  toggleDropdown() {
    const dropdown = document.getElementsByClassName("sort-options")[0];
    if (dropdown.classList.contains("show-sort-options")) {
      dropdown.classList.remove("show-sort-options");
    } else {
      const previous = document.getElementsByClassName('sort-options-selected')[0];
      if (previous) previous.classList.remove('sort-options-selected');
      dropdown.classList.add("show-sort-options");
      const selectedSort = document.getElementById(`${this.props.noteSortType.join(" ")}`);
      selectedSort.classList.add("sort-options-selected");
    }
  }

  setHeader(props) {
    let header;
    if (props.selectedNotebook === -1 ) { //trash header
      header = (
        (
          <header className="trash-notes-header">
            <div className="trash-notes-title">
              <h4>Trash</h4>
              <button
                onClick={(e) => this.props.emptyTrash(e, props.notes)}
                className="empty-trash"
                >Empty Trash</button>
            </div>
            <p>{props.notes.length} notes</p>
            <p
              id="alt-dropdown-link"
              onClick={() => this.toggleDropdown()}>Sort By &#8623;</p>
            <div className="sort-options">
              <ul onClick={(e) => this.handleSort(props.notes, e)}>
                <li id="createdAt">Date created (oldest first)<span>&#10004;</span></li>
                <li id="createdAt true">Date created (newest first)<span>&#10004;</span></li>
                <li id="updatedAt">Date updated (oldest first)<span>&#10004;</span></li>
                <li id="updatedAt true">Date updated (newest first)<span>&#10004;</span></li>
                <li id="title">Title (ascending)<span>&#10004;</span></li>
                <li id="title true">Title (descending)<span>&#10004;</span></li>
              </ul>
            </div>
          </header>
        )
      );
    } else if (!props.selectedNotebook) {
      header = (
        (
          <header className="plain-notes-header">
            <h4>NOTES</h4>
            <p>{props.notes.length} notes</p>
            <p
              className="sort-dropdown-link"
              onClick={() => this.toggleDropdown()}>Sort By &#8623;</p>
            <div className="sort-options">
              <ul onClick={(e) => this.handleSort(props.notes, e)}>
                <li id="createdAt">Date created (oldest first)<span>&#10004;</span></li>
                <li id="createdAt true">Date created (newest first)<span>&#10004;</span></li>
                <li id="updatedAt">Date updated (oldest first)<span>&#10004;</span></li>
                <li id="updatedAt true">Date updated (newest first)<span>&#10004;</span></li>
                <li id="title">Title (ascending)<span>&#10004;</span></li>
                <li id="title true">Title (descending)<span>&#10004;</span></li>
              </ul>
            </div>
          </header>
        )
      );
    } else {
      header = (
        (
          <header className="notebook-notes-header">
            <div className="notebook-notes-title">
              <h4>{props.selectedNotebookTitle}</h4>
            </div>
            <p>{props.notes.length} notes</p>
            <p
              id="alt-dropdown-link"
              onClick={() => this.toggleDropdown()}>Sort By &#8623;</p>
            <div className="sort-options">
              <ul onClick={(e) => this.handleSort(props.notes, e)}>
                <li id="createdAt">Date created (oldest first)<span>&#10004;</span></li>
                <li id="createdAt true">Date created (newest first)<span>&#10004;</span></li>
                <li id="updatedAt">Date updated (oldest first)<span>&#10004;</span></li>
                <li id="updatedAt true">Date updated (newest first)<span>&#10004;</span></li>
                <li id="title">Title (ascending)<span>&#10004;</span></li>
                <li id="title true">Title (descending)<span>&#10004;</span></li>
              </ul>
            </div>
          </header>
        )
      );
    }
    this.setState({ header });
  } //refactor the select into a dropdown so that you can recall search type on refresh from UI state

  componentDidMount() {
    this.sortNotes(this.props.notes, ...this.props.noteSortType);
    this.setHeader(this.props);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.barNavType === 'notes') {
      this.sortNotes(newProps.notes, "updatedAt", true);
      if (newProps.notes.length > this.props.notes.length) {
        this.selectNote(newProps.notes[0].id);
        this.sortNotes(newProps.notes, ...newProps.noteSortType);
        this.setHeader(newProps);
      } else {
        this.sortNotes(newProps.notes, ...newProps.noteSortType);
        if (
          !this.props.selectedNote &&
          this.props.noteSortType === newProps.noteSortType
        ) {
          if (newProps.notes[0]) this.selectNote(newProps.notes[0].id);
        }
        this.setHeader(newProps);
      }
    } else {
      this.setHeader(newProps);
    }
  }

  selectNote(selectedId) {
    if (selectedId !== this.state.selectedId) {
      this.props.history.push(`/home&n=${selectedId}`);
      this.setState({
        selectedId
      });
    }
  }


  render() {
    return (
      <div className='notes-nav-container'>
        {this.state.header}
        <div id='notes-nav' className='notes-nav'>
          {
            this.props.notes.map(note => (
              <div
                key={note.id}
                onClick={() => this.selectNote(note.id)}>
                <NotesNavItem
                  trashNote={this.props.trashNote}
                  deleteNote={this.props.deleteNote}
                  restoreNote={this.props.restoreNote}
                  trashView={(this.props.selectedNotebook === -1 ) ? true : false}
                  note={note}
                  selected={(
                    this.state.selectedId === note.id
                  ) ? 'true' : false}
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
