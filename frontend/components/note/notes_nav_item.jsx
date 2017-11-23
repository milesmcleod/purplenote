import React from 'react';

class NotesNavItem extends React.Component {
  constructor(props) {
    super(props);
  }

  setDateDisplayValue() {
    // return Date.parse(this.props.note.updatedAt);
    const noteDate = Date.parse(this.props.note.updatedAt);
    if ((Date.now() - noteDate)/1000 < 60) {
      return 'a few seconds ago';
    } else if (
      ((Date.now() - noteDate)/1000 >=60) &&
      ((Date.now() - noteDate)/1000 < 3600)
    ) {
      return Math.floor(((Date.now() - noteDate)/1000)/60) === 1 ?
      `${Math.floor(((Date.now() - noteDate)/1000)/60)} minute ago` :
      `${Math.floor(((Date.now() - noteDate)/1000)/60)} minutes ago`;
    } else if (
      ((Date.now() - noteDate)/1000 >=3600) &&
      ((Date.now() - noteDate)/1000 < (3600*24))
    ) {
      return (Math.floor(((Date.now() - noteDate)/1000)/3600) === 1) ?
      `${Math.floor(((Date.now() - noteDate)/1000)/3600)} hour ago` :
      `${Math.floor(((Date.now() - noteDate)/1000)/3600)} hours ago`
      ;
    } else if (
      ((Date.now() - noteDate)/1000 >=(3600*24)) &&
      ((Date.now() - noteDate)/1000 < (3600*24*2))
    ) {
      return `YESTERDAY`;
    } else if (
      ((Date.now() - noteDate)/1000 >=(3600*24)) &&
      ((Date.now() - noteDate)/1000 < (3600*24*7))
    ) {
      return `${Math.floor(((Date.now() - noteDate)/1000)/3600*24)} days ago`;
    } else {
      const date = this.props.note.updatedAt;
      return `${date.slice(5,7)}/${date.slice(8,10)}/${date.slice(0,4)}`;
    }
  }

  render() {
    const date = this.setDateDisplayValue();
    return (
      <div
        onClick={() => this.props.receiveSelectedNote(this.props.note.id)}
        className="notes-nav-item">
        <div className="notes-nav-item-trash">T</div>
        <div className="notes-nav-item-shortcut">S</div>
        <h3 className="notes-nav-item-title">{this.props.note.title}</h3>
        <p className="notes-nav-item-date">{date}</p>
        <p className="notes-nav-item-content">{this.props.note.content}</p>
      </div>
    );
  }
}

export default NotesNavItem;
