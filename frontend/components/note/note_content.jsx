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
        content: ""
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
    console.log(this.props.note.id);
    this.setState({
      [e.target.name]: e.target.value
    });
    if (!this.props.note.id) {
      clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(() => {
        this.props.postNote(this.state);
      }, 4000);
    } else {
      clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(() => {
        this.props.patchNote(this.state);
      }, 4000);
    }

  }

  autosave(){
    window.setTimer(()=> {

    });
  }

  componentDidMount() {

  }

  render() {
    return (
      <form className='note-content-form'>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={(e) => this.handleChange(e)}
          ></input>
        <textarea
          type="text"
          name="content"
          value={this.state.content}
          onChange={(e) => this.handleChange(e)}
          ></textarea>
      </form>
    );
  }
}

export default NoteContent;
