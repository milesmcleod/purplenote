import React from 'react';
import NoteContentContainer from './note_content_container';

class NoteBody extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let body;
    if (!this.props.note) {
      body = (<div className="no-notes"></div>);
    } else {
      body = (<NoteContentContainer />);
    }
    return (
      body
    );
  }
}

export default NoteBody;
