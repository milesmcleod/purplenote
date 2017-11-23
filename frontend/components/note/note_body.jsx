import React from 'react';
import NoteHeaderContainer from './note_header_container';
import NoteContentContainer from './note_content_container';

class NoteBody extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.note);

    return ((!this.props.note) ? (
        <section className="note-body">
          <NoteHeaderContainer />
          <NoteContentContainer note={null}/>
        </section>
      ) : (
        <section className="note-body">
          <NoteHeaderContainer />
          <NoteContentContainer note={this.props.note}/>
        </section>
      )
    );
  }
}

export default NoteBody;
