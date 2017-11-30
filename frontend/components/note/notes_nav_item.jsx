import React from 'react';
import Parser from 'html-react-parser';

class NotesNavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
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
      ((Date.now() - noteDate)/1000 >=(3600*24*2)) &&
      ((Date.now() - noteDate)/1000 < (3600*24*7))
    ) {
      return `${Math.floor(((Date.now() - noteDate)/1000)/(3600*24))} days ago`;
    } else {
      const date = this.props.note.updatedAt;
      return `${date.slice(5,7)}/${date.slice(8,10)}/${date.slice(0,4)}`;
    }
  }

  render() {
    const date = this.setDateDisplayValue();
    const options = (this.props.trashView) ? (
      <div>
        <div className="erase-note"
          onClick={(e) => {
            e.stopPropagation();
            this.props.deleteNote(this.props.note.id);
          }}
        >Erase</div>
        <div
          className="restore-note"
          onClick={(e) => {
            e.stopPropagation();
            this.props.restoreNote(this.props.note);
          }}
        >Restore</div>
      </div>
  ) : (
    <div>
      <div
        className={
          (this.props.shortcutted) ? (
            "notes-nav-item-shortcut-alt"
          ) : (
            "notes-nav-item-shortcut"
          )}
        onClick={(e) => {
          e.stopPropagation();
          if (this.props.shortcutted) {
            this.props.patchShortcut({
              shortcuttable_id: this.props.note.id,
              shortcuttable_type: "Note"
            });
          } else {
            this.props.postShortcut({
              shortcuttable_id: this.props.note.id,
              shortcuttable_type: "Note"
            });
          }
        }}
        ></div>
      <div
        className="notes-nav-item-trash"
        onClick={(e) => {
          e.stopPropagation();
          this.props.trashNote(this.props.note);
          if (this.props.selected) {
            this.props.history.push('/home');
          }
        }}
      ></div>
    </div>
  );
    return (
      <div
        className={(this.props.selected) ? "notes-nav-item selected-note" : "notes-nav-item"}>
        <div className="notes-nav-item-header">
          <h3 className="notes-nav-item-title">{this.props.note.title}</h3>
          {options}
        </div>
        <p className="notes-nav-item-date">{date}</p>
        <div className="notes-nav-item-content">{
            (this.props.note.content) ?
            Parser(this.props.note.content) :
            this.props.note.content
          }</div>
    </div>
    );
  }
}

export default NotesNavItem;
