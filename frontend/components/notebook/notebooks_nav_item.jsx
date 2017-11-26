import React from 'react';

class NotebooksNavItem extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div className={(this.props.selected) ?
           "notebook-item selected-notebook" : "notebook-item"}>
         <p className='notebook-item-title'>{this.props.notebook.title}</p>
         <span className="notebook-item-shortcut"></span>
         <span className="notebook-item-trash"></span>
         <p className='notebook-item-count'>{this.props.notebook.noteCount}{' '}
           {(this.props.notebook.noteCount === 1) ? 'note' : 'notes'}</p>
      </div>
    );
  }
}

export default NotebooksNavItem;
