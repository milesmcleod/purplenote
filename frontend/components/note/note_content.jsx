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
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.note);

  }

  // i learned how to write the following function
  // from reading up on throttling and debouncing
  // all over the web. the video that really made it click for me is at
  // this link: www.youtube.com/watch?v=93g5JWAjtk0
  // the organization is called leadinger.
  // it is a simple video to code through.
  // warning: the narrator's commentary is lewd.

  // autosave 5 seconds from when the user stops changing things;
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
      this.props.fetchNotes();
    } else {
      this.props.postNote(this.state);
      this.props.fetchNotes();
    }
  }

  render() {
    return (
      <form
        className='note-content-form'
        onSubmit={e => this.handleSubmit(e)}
        >
        <input
          type="text"
          name="title"
          autoFocus
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
        <input
          className="save-note"
          type="submit"
          value="Done"
        ></input>
      </form>
    );
  }
}

export default NoteContent;
