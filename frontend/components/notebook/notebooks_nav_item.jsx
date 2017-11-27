import React from 'react';


class NotebooksNavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deletion: (<div></div>)
    };
  }

  showDeleteNotebookModal() {
    const modalBackground = document.getElementById("modalBackground");
    modalBackground.classList.add("secondary-nav-totality");
    const modal = document.getElementsByClassName('delete-notebook-modal')[0];
    modal.classList.add("new-notebook-modal-show");
    window.setTimeout(() => {
      modal.classList.add("new-notebook-modal-fade-in");
    }, 0);
  }

  render() {
    return (
      <div className={(this.props.selected) ?
           "notebook-item selected-notebook" : "notebook-item"}>
         <p className='notebook-item-title'>{this.props.notebook.title}</p>
         <span className="notebook-item-shortcut"></span>
         <span
           className="notebook-item-trash"
           onClick={(e) => {
             e.preventDefault();
             e.stopPropagation();
             this.props.enterNotebookDeletion(this.props.notebook.id);
             this.showDeleteNotebookModal();
           }}
           ></span>
         <p className='notebook-item-count'>{this.props.noteCount}{' '}
           {(this.props.noteCount === 1) ? 'note' : 'notes'}</p>
      </div>
    );
  }
}

export default NotebooksNavItem;
