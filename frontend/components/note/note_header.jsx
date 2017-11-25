import React from 'react';

class NoteHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const button = (this.props.fullscreen) ?
      (
        <span
          className="exit-fullscreen-button"
          onClick={() => {
            this.props.exitFullscreen();
            if (this.props.match.params.selectedNote === 'new') {
              this.props.history.goBack();
            }
          }}
          >Done</span>
      ) : (
        <span
          className="fullscreen-button"
          onClick={() => this.props.enterFullscreen()}
          >Fullscreen</span>
      );
    return (
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
        {button}
      </header>
    );
  }
}

export default NoteHeader;
