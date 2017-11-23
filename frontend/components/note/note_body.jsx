import React from 'react';
import NoteHeaderContainer from './note_header_container';

class NoteBody extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.note);

    return ((!this.props.note) ? (
      <div></div>
      ) : (
        <section className="note-body">
          <NoteHeaderContainer />
          <h1>{this.props.note.title}</h1>
          <p>{this.props.note.content}</p>
        </section>
      )
    );
  }
}

export default NoteBody;
