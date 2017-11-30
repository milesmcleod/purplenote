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
    console.log(this.props.shortcutted);
    return (
      <div className={(this.props.selected) ?
           "notebook-item selected-notebook" : "notebook-item"}>
         <p className='notebook-item-title'>{this.props.notebook.title}</p>
         <span
           className={
             (this.props.shortcutted) ? (
               "notebook-item-shortcut-alt"
             ) : (
               "notebook-item-shortcut"
             )}
           onClick={(e) => {
             e.stopPropagation();
             if (this.props.shortcutted) {
               this.props.patchShortcut({
                 shortcuttable_id: this.props.notebook.id,
                 shortcuttable_type: "Notebook"
               });
             } else {
               this.props.postShortcut({
                 shortcuttable_id: this.props.notebook.id,
                 shortcuttable_type: "Notebook"
               });
             }
           }}
           ></span>
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
