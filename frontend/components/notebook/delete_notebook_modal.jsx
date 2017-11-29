import React from 'react';

class DeleteNotebookModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleKeypress = this.handleKeypress.bind(this);
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps);
    if (newProps.activeModal === 'deleteNotebook') {
      document.addEventListener("keydown", this.handleKeypress);
    } else {
      document.removeEventListener("keydown", this.handleKeypress);
    }
    if (newProps.title !== ""
    ) {
      this.setState ({
        title: newProps.title
      });
    }
  }

  handleKeypress(e) {
    const modalBackground = document.getElementById("modalBackground");
    if (modalBackground.classList.contains("secondary-nav-totality")) {
      if (e.keyCode === 27) {
        console.log('exited delete notebook modal');
        this.exitModal(e);
      } else if (e.keyCode === 13) {
        console.log('deleted notebook');
        this.handleSubmit(e);
      }
    }
  }

  handleSubmit(e) {
    if (this.props.active !== this.props.default) {
      this.props.deleteNotebook(this.props.active);
      if (this.props.selected === this.props.active) {
        this.props.history.push('/home');
        this.props.receiveSelectedNotebook(undefined);
      }
      this.props.exitNotebookDeletion();
      this.exitModal(e);
    }
  }

  exitModal(e) {
    const modalBackground = document.getElementById("modalBackground");
    modalBackground.classList.remove("secondary-nav-totality");
    const modal = document.getElementsByClassName('delete-notebook-modal')[0];
    modal.classList.remove("new-notebook-modal-fade-in");
    window.setTimeout(() => {
      modal.classList.remove("new-notebook-modal-show");
    }, 400);
  }

  render () {
    let query;
    query = (this.props.active === this.props.default) ? (
      <div className='delete-query'>
        <h1>Your default notebook cannot be deleted.</h1>
      </div>
    ) : (
      <div className='delete-query'>
        <h1>Are you sure you want to delete </h1><p>{this.state.title}</p><h1>?</h1>
      </div>
    );
    return (
      <div className="delete-notebook-modal">
        <h4>DELETE NOTEBOOK</h4>
        <hr></hr>
          {query}
          <div className='form-buttons'>
            <button
            onClick={(e) => {
              if (this.props.active !== this.props.default) {
                this.props.deleteNotebook(this.props.active);
                if (this.props.selected === this.props.active) {
                  this.props.history.push('/home');
                  this.props.receiveSelectedNotebook(undefined);
                }
                this.props.exitNotebookDeletion();
                this.exitModal(e);
              }
            }}
            className={
              (this.props.active === this.props.default) ? (
                "modal-submit modal-submit-empty"
              ) : (
                "modal-submit"
              )
            }
             type="submit">Delete</button>
             <button
               value="Cancel"
               onClick={(e) => {
                 this.props.exitNotebookDeletion();
                 this.exitModal(e);
               }}
               className="modal-submit modal-cancel"
               >Cancel</button>
          </div>
      </div>
    );
  }
}

export default DeleteNotebookModal;
