import React from 'react';
import merge from 'lodash/merge';
import NoteTagsContainer from '../tag/note_tags_container';

class NoteContent extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.note){
      this.state = this.props.note;
    } else if (this.props.selectedNotebook) {
      this.state = {
        title: "",
        content: "",
        notebook_id: this.props.selectedNotebook
      };
    } else {
      this.state = {
        title: "",
        content: "",
        notebook_id: this.props.defaultNotebook
      };
    }
    this.debounceTimer = undefined;
    this.focus = undefined;
    this.button = undefined;
  }

  componentDidMount() {
    document.addEventListener("keydown", (e) => this.handleKeypress(e));
  }



  handleKeypress(e) {
    if (e.keyCode === 27 && this.props.fullscreen === true) {
      this.props.exitFullscreen();
    }
  }

  // i learned how to write the following function
  // from reading up on throttling and debouncing
  // all over the web. the video that really made it click for me is at
  // this link: www.youtube.com/watch?v=93g5JWAjtk0
  // the organization is called leadinger.
  // it is a simple video to code through.
  // warning: the narrator's commentary is lewd.

  // autosave 4 seconds from when the user stops changing things;
  // reset timer every time a change is made within 4 seconds

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    if (this.props.note) {
      clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(() => {
        this.props.patchNote(this.state);
      }, 4000);
    }
  }

  selectNote(selectedId) {
    this.props.history.push(`/home&n=${selectedId}`);
    this.setState({
      selectedId
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.note) {
      this.props.patchNote(this.state)
      .then(() => this.props.exitFullscreen());
    } else {
      this.props.postNote(this.state)
      .then((r) => this.selectNote(r.payload.id))
      .then(() => this.props.exitFullscreen());
    }
  }

  componentWillMount() {
    if (this.props.notebooks.length === 0 && this.props.match.params.noteId === 'new') {
      this.props.history.push('/home');
    }
  }

  componentWillReceiveProps(newProps) {
    if (
      this.props.selectedNote !== 'new' &&
      (newProps.selectedNote === 'new' || this.props.note.id !== newProps.note.id)
    ) {
      this.props.patchNote(this.state);
    }
    if (newProps.selectedNote !== 'new') {
      if (this.state.id === newProps.note.id) {
        this.setState(this.state);
      } else {
        this.setState(newProps.note);
      }
    } else if (newProps.selectedNotebook) {
      this.state = {
        title: "",
        content: "",
        notebook_id: newProps.selectedNotebook
      };
      let autoFocus = document.getElementsByClassName("note-content-form-title")[0].focus();
    } else {
      this.state = {
        title: "",
        content: "",
        notebook_id: newProps.defaultNotebook
      };
      let autoFocus = document.getElementsByClassName("note-content-form-title")[0].focus();
    }
  }

  handleSelect(e, notebook_id) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      notebook_id
    });
    window.setTimeout(() => {
      if (this.props.note) {
        this.props.patchNote(this.state);
      }
    });
    this.toggleDropdown();
  }

  toggleDropdown() {
    const dropdown = document.getElementsByClassName("select-notebook-options")[0];
    if (dropdown.classList.contains("show-select-notebook-options")) {
      dropdown.classList.remove("show-select-notebook-options");
    } else {
      const previous = document.getElementsByClassName('select-notebook-options-selected')[0];
      if (previous) previous.classList.remove('select-notebook-options-selected');
      dropdown.classList.add("show-select-notebook-options");
      const selectedNotebook = document.getElementById(this.state.notebook_id);
      selectedNotebook.classList.add("select-notebook-options-selected");
    }
  }

  render() {
    if (this.props.notebooks.length === 0 && this.props.match.params.noteId === 'new') {
      return <div></div>;
    }
    if (
      this.props.match.params.noteId === 'new' &&
      this.state.title !== ''
    ) {
      this.button = (
        <span
          className="save-note-button"
          type="submit"
          onClick={e => this.handleSubmit(e)}
          value="Save"
        >Save</span>
      );
    } else if (
      this.props.match.params.noteId === 'new' &&
      this.state.title === ''
    ) {
      this.button = (
        <span
          className="exit-fullscreen-button"
          onClick={() => {
            this.props.exitFullscreen();
            this.props.history.goBack();
          }}
          value="Cancel"
          >Cancel</span>
      );
    } else if (this.props.fullscreen) {
      this.button = (
        <span
          className="exit-fullscreen-button"
          onClick={() => {
            this.props.patchNote(this.state);
            this.props.exitFullscreen();
          }}
          value="Done"
          >Done</span>
      );
    } else {
      this.button = (
        <span
          className="fullscreen-button"
          onClick={() => {
            this.props.patchNote(this.state);
            this.props.enterFullscreen();
          }}
          value="Fullscreen"
          >Fullscreen</span>
      );
    }
    let currentNotebook = this.props.notebooks.filter(notebook => (
      notebook.id === this.state.notebook_id
    ))[0];
    const selectNotebook = (
      <div
        className="notebook-dropdown-container"
        >
        <p
          className="select-notebook-dropdown-link"
          onClick={() => this.toggleDropdown()}>{`${currentNotebook.title}`} &#8623;</p>
        <div className="select-notebook-options">
          <ul>
            {
              this.props.notebooks.map(notebook => (
                <li
                  onClick={(e) => this.handleSelect(e, notebook.id)}
                  id={`${notebook.id}`}
                  key={`${notebook.id}`}
                  className={
                    (notebook.id === this.state.notebook_id) ? (
                      "selected-notebook-options-selected"
                    ) : (
                      ""
                    )
                  }
                >{`${notebook.title}`}<span>&#10004;</span></li>
              ))
            }
          </ul>
        </div>
      </div>
    );
    let noteTagsContainer;
    if (this.props.selectedNote !== 'new' ) {
      noteTagsContainer = (<NoteTagsContainer
        updateNote={() => this.props.patchNote(this.state)}/>);
    } else {
      noteTagsContainer = (<div></div>);
    }

    return (
      <section className="note-body">
        <header className="note-header-container">
          <div className="note-options">
            <div className="note-header-shortcut"></div>
            <div
              className="note-header-trash"
              onClick={(e) => {
                e.stopPropagation();
                this.props.trashNote(this.props.note);
                this.props.history.push('/home');
              }}
              ></div>
          </div>
          {this.button}
        </header>
        <section className="note-area">
          <div className="note-top">
            {selectNotebook}
            {noteTagsContainer}
          </div>
          <form
            className='note-content-form'
            onSubmit={(e) => this.handleSubmit(e)}
            >
            <input
              type="text"
              name="title"
              className="note-content-form-title"
              value={this.state.title}
              id="title"
              placeholder="Title your note"
              onChange={(e) => this.handleChange(e)}
              ></input>
            <textarea
              type="text"
              name="content"
              placeholder="Just start typing..."
              value={this.state.content}
              onChange={(e) => this.handleChange(e)}
              ></textarea>
          </form>
        </section>
      </section>
    );
  }
}

export default NoteContent;
