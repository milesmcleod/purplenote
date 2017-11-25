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
        notebook_id: 1
      };
    }
    this.debounceTimer = undefined;
    this.focus = undefined;
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
    console.log(newProps);
    if (newProps.selectedNote !== 'new') {
      this.setState(newProps.note);
    } else {
      this.setState({
        title: "",
        content: "",
        notebook_id: 1
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

  render() {
    let button;
    if (
      this.props.match.params.noteId === 'new' &&
      this.state.title !== ''
    ) {
      button = (
        <input
          className="save-note"
          type="submit"
          onClick={e => this.handleSubmit(e)}
          value="Save"
        ></input>
      );
    } else {
      button = (
        <div></div>
      );
    }
    return (
      <form
        className='note-content-form'
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
        {button}
      </form>
    );
  }
}

export default NoteContent;
