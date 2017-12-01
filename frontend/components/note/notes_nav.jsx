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
    this.toggleDropdown(e);
    this.props.receiveNoteSortType(arr);
  }

  toggleDropdown() {
    let dropdown = document.getElementsByClassName("sort-options")[0];
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

  showNotebookInfoModal() {
    const modalBackground = document.getElementById("modalBackground");
    modalBackground.classList.add("secondary-nav-totality");
    const modal = document.getElementsByClassName('notebook-info-modal')[0];
    modal.classList.add("notebook-info-modal-show");
    window.setTimeout(() => {
      modal.classList.add("notebook-info-modal-fade-in");
    }, 0);
  }

  setHeader(props) {
    let header;
    if (props.searchQuery) {
      header = (
        (
          <header className="plain-notes-header">
            <h4>SEARCH: {props.searchQuery.toUpperCase()}</h4>
            <p>{props.notes.length}{(props.notes.length === 1) ? " result" : " results"}</p>
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
    } else if (props.selectedNotebook === -1 ) { //trash header
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
            <p>{props.notes.length}{(props.notes.length === 1) ? " note" : " notes"}</p>
            <p
              className="alt-dropdown-link"
              id="alt-dropdown-link"
              onClick={() => this.toggleDropdown()}>Sort By &#8623;</p>
            <div className="sort-options" id="alt-sort-options">
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
    } else if (props.selectedTag) {
      header = (
        (
          <header className="plain-notes-header">
            <h4>TAG: {props.selectedTagTitle.toUpperCase()}</h4>
            <p>{props.notes.length}{(props.notes.length === 1) ? " note" : " notes"}</p>
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
    } else if (!props.selectedNotebook) {
      header = (
        (
          <header className="plain-notes-header">
            <h4>NOTES</h4>
            <p>{props.notes.length}{(props.notes.length === 1) ? " note" : " notes"}</p>
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
    } else if (props.selectedNotebook){
      header = (
        (
          <header className="notebook-notes-header">
            <div className="notebook-notes-title">
              <h4>{props.selectedNotebookTitle}</h4>
              <div
                className="alt-dropdown-link"
                className="notebook-info-link"
                onClick={() => {
                  this.props.activateModal('notebookInfo');
                  this.showNotebookInfoModal();
                }}
                >i</div>
            </div>
            <p>{props.notes.length}{(props.notes.length === 1) ? " note" : " notes"}</p>
            <p
              className="alt-dropdown-link"
              id="alt-dropdown-link"
              onClick={() => this.toggleDropdown()}>Sort By &#8623;</p>
            <div className="sort-options" id="alt-sort-options">
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
  }

  componentDidMount() {
    this.sortNotes(this.props.notes, ...this.props.noteSortType);
    this.setHeader(this.props);
  }

  componentWillReceiveProps (newProps) {
    this.sortNotes(newProps.notes, ...newProps.noteSortType);
    if (!newProps.selectedNote && newProps.notes[0]) {
      this.selectNote(newProps.notes[0].id);
    }

    this.setState({
      notes: newProps.notes,
      selectedId: this.props.selectedNote
    });
    this.setHeader(newProps);
  }

  selectNote(selectedId) {
    this.props.history.push(`/home&n=${selectedId}`);
    this.setState({
      selectedId
    });
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
                  postShortcut={this.props.postShortcut}
                  patchShortcut={this.props.patchShortcut}
                  shortcutted={
                    (this.props.shortcutNoteIds.includes(note.id)) ? (
                      true
                    ) : (
                      false
                    )
                  }
                  history={this.props.history}
                  trashView={(this.props.selectedNotebook === -1 ) ? true : false}
                  note={note}
                  selected={(
                    this.props.match.params.noteId == note.id
                  ) ? true : false}
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
