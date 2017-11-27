import React from 'react';
import merge from 'lodash/merge';

class NoteContent extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.note){
      this.state = this.props.note;
    } else {
      this.state = {
        title: "",
        content: "",
        notebook_id: this.props.selectedNotebook
      };
    }
    this.debounceTimer = undefined;
    this.focus = undefined;
    this.button = undefined;
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

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.note) {
      this.props.patchNote(this.state);
    } else {
      this.props.postNote(this.state);
    }
    this.props.exitFullscreen();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.selectedNote !== 'new') {
      this.setState(newProps.note);
    } else {
      this.setState({
        title: "",
        content: "",
        notebook_id: newProps.selectedNotebook
      });
      let autoFocus = document.getElementsByClassName("note-content-form-title")[0].focus();
    }
    if (
      this.state &&
      this.props.note &&
      this.props.selectedNote !== 'new' &&
      this.props.selectedNote !== newProps.selectedNote &&
      (this.props.note.title !== this.state.title || this.props.note.content !== this.state.content)
    ) {
      this.props.patchNote(this.state);
    }
  }

  handleSelect(e) {
    // e.preventDefault();
    // e.stopPropagation();
    this.setState({
      notebook_id: e.target.value
    });
    window.setTimeout(() => {
      if (this.props.note) {
        this.props.patchNote(this.state);
      }
    });
    // this.toggleDropdown();
  }

  toggleDropdown() {
    // const dropdown = document.getElementsByClassName("sort-options")[0];
    // if (dropdown.classList.contains("show-sort-options")) {
    //   dropdown.classList.remove("show-sort-options");
    // } else {
    //   const previous = document.getElementsByClassName('sort-options-selected')[0];
    //   if (previous) previous.classList.remove('sort-options-selected');
    //   dropdown.classList.add("show-sort-options");
    //   const selectedSort = document.getElementById(`${this.props.noteSortType.join(" ")}`);
    //   selectedSort.classList.add("sort-options-selected");
    // }
  }

  render() {
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
            this.props.history.goBack();
            this.props.exitFullscreen();
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
    return (
      <section className="note-body">
        <header className="note-header-container">
          <div className="note-options">
            <div className="note-header-shortcut"></div>
            <div
              className="note-header-trash"
              onClick={(e) => {
                e.stopPropagation();
                this.props.deleteNote(this.props.selectedNote);
                this.props.history.push('/home');
              }}
              ></div>
          </div>
          {this.button}
        </header>
        <form
          className='note-content-form'
          onSubmit={(e) => this.handleSubmit(e)}
          >
          <select onChange={(e) => this.handleSelect(e)}>
            {
              this.props.notebooks.map(notebook => (
                <option
                  value={notebook.id}
                  key={`${notebook.id}`}
                  selected={(this.state.notebook_id === notebook.id) ? true : false}
                  >{`${notebook.title}`}</option>
              ))
            }
          </select>
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
    );
  }
}

export default NoteContent;
