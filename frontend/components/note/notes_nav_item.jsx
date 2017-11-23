import React from 'react';

class NotesNavItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        onClick={() => this.props.receiveSelectedNote(this.props.note.id)}
        className="notes-nav-item">
        <div className="notes-nav-item-trash">T</div>
        <div className="notes-nav-item-shortcut">S</div>
        <h3 className="notes-nav-item-title">{this.props.note.title}</h3>
        <p className="notes-nav-item-date">PLACEHOLDER</p>
        <p className="notes-nav-item-content">{this.props.note.content}</p>
      </div>
    );
  }
}

export default NotesNavItem;
