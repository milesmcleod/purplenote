import React from 'react';

class NotebooksNavItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className={(this.props.selected) ?
           "notebook-item selected-notebook" : "notebook-item"}>
        <p className='notebook-item-title'>{this.props.notebook.title}</p>
        <p className='notebook-item-count'>{this.props.notebook.noteCount}
          {(this.props.notebook.noteCount === 1) ? 'note' : 'notes'}</p>
        <div
          className="notes-nav-item-shortcut"
          onClick={(e) => {
            e.stopPropagation();
          }}
          ></div>
        <div
          className="notes-nav-item-trash"
          onClick={(e) => {
            e.stopPropagation();
            this.props.deleteNotebook(this.props.notebook.id);
            if (this.props.selected) {
              this.props.history.push('/home');
            }
          }}
        ></div>
      </div>
    );
  }
}

export default NotebooksNavItem;
