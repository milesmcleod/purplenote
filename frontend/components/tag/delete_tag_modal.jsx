import React from 'react';

class DeleteTagModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleKeypress = this.handleKeypress.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.activeModal === 'deleteTag') {
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
        this.exitModal(e);
      } else if (e.keyCode === 13) {
        if (this.props.active !== this.props.default) {
          this.props.deleteTag(this.props.active);
          if (this.props.selected === this.props.active) {
            this.props.history.push('/home');
            this.props.receiveSelectedTag(undefined);
          }
          this.props.exitTagDeletion();
          this.exitModal(e);
        }
      }
    }
  }

  exitModal(e) {
    this.props.deactivateModal();
    const modalBackground = document.getElementById("modalBackground");
    modalBackground.classList.remove("secondary-nav-totality");
    const modal = document.getElementsByClassName('delete-tag-modal')[0];
    modal.classList.remove("new-notebook-modal-fade-in");
    window.setTimeout(() => {
      modal.classList.remove("new-notebook-modal-show");
    }, 400);
  }

  render () {
    let query;
    query = (
      <div className='delete-query'>
        <h1>Are you sure you want to delete </h1><p>{this.state.title}</p><h1>?</h1>
      </div>
    );
    return (
      <div className="delete-tag-modal">
        <h4>DELETE NOTEBOOK</h4>
        <hr></hr>
          {query}
          <div className='form-buttons'>
            <button
            onClick={(e) => {
              if (this.props.active !== this.props.default) {
                this.props.deleteTag(this.props.active);
                if (this.props.selected === this.props.active) {
                  this.props.history.push('/home');
                  this.props.receiveSelectedTag(undefined);
                }
                this.props.exitTagDeletion();
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
                 this.props.exitTagDeletion();
                 this.exitModal(e);
               }}
               className="modal-submit modal-cancel"
               >Cancel</button>
          </div>
      </div>
    );
  }
}

export default DeleteTagModal;
