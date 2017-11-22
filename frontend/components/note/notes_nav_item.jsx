import React from 'react';

const NotesNavItem = (props) => {
  return (
    <div className="notes-nav-item">
      <h3 className="notes-nav-item-title">{props.note.title}</h3>
      <p className="notes-nav-item-date">PLACEHOLDER</p>
      <p className="notes-nav-item-content">{props.note.content}</p>
    </div>
  );
};

export default NotesNavItem;
