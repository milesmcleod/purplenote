import React from 'react';
import NoteContentContainer from './note_content_container';

class NoteBody extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ((!this.props.note) ? (
        <NoteContentContainer note={null}/>
      ) : (
        <NoteContentContainer note={this.props.note}/>
      )
    );
  }
}

export default NoteBody;
