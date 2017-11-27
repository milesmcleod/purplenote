import React from 'react';

class NotebookInfoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      title: "",
      createdAt: undefined,
      updatedAt: undefined
    });
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
    window.setTimeout(() => {
      if (this.props.titles.includes(this.state.title)) {
        const errors = document.getElementsByClassName("modal-form-errors")[1];
        errors.classList.add("modal-form-errors-show");
        const submit = document.getElementById("save-notebook-title-change");
        submit.classList.add("modal-submit-empty");
      } else if (this.state.title === '') {
        const submit = document.getElementById("save-notebook-title-change");
        submit.classList.add("modal-submit-empty");
      } else {
        const errors = document.getElementsByClassName("modal-form-errors")[1];
        errors.classList.remove("modal-form-errors-show");
        const submit = document.getElementById("save-notebook-title-change");
        submit.classList.remove("modal-submit-empty");
      }
    }, 20);
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.notebook);
  }

  handleSubmit(e) {
    if (this.state.title === "") {
      e.preventDefault();
    } else if (this.props.titles.includes(this.state.title)) {
      e.preventDefault();
      const errors = document.getElementsByClassName("modal-form-errors")[0];
      errors.classList.add("modal-form-errors-show");
      const submit = document.getElementById("save-notebook-title-change");
      submit.classList.add("modal-submit-empty");
    } else {
      e.preventDefault();
      const notebook = Object.assign({}, this.state);
      this.props.patchNotebook(notebook);
      this.exitModal(e, true);
    }
  }

  exitModal(e, savedExit) {
    if (e) e.preventDefault();
    if (!savedExit) window.setTimeout(() => {
      this.setState(this.props.notebook);
    }, 400);
    const modalBackground = document.getElementById("modalBackground");
    modalBackground.classList.remove("secondary-nav-totality");
    const modal = document.getElementsByClassName('notebook-info-modal')[0];
    modal.classList.remove("notebook-info-modal-fade-in");
    window.setTimeout(() => {
      modal.classList.remove("notebook-info-modal-show");
    }, 400);
  }

  showDeleteNotebookModal() {
    const modal = document.getElementsByClassName('delete-notebook-modal')[0];
    modal.classList.add("new-notebook-modal-show");
    const modalBackground = document.getElementById("modalBackground");
    this.exitModal(null, false);
    modalBackground.classList.add("secondary-nav-totality");
    window.setTimeout(() => {
      modal.classList.add("new-notebook-modal-fade-in");
    }, 0);
  }

  render() {
    let createdAt, updatedAt;
    if (this.state.createdAt) {
      createdAt = (
        this.state.createdAt.slice(5, 7) + '/' +
        this.state.createdAt.slice(8, 10) + '/' +
        this.state.createdAt.slice(0, 4)
      );
      updatedAt = (
        this.state.updatedAt.slice(5, 7) + '/' +
        this.state.updatedAt.slice(8, 10) + '/' +
        this.state.updatedAt.slice(0, 4)
      );
    } else {
      createdAt = "";
      updatedAt = "";
    }
    return(
      <div className='notebook-info-modal'>
        <div className='modal-form-errors'>
          <p>
            The notebook title entered already exists. Please choose another title.
          </p>
        </div>
        <h4>Notebook Info</h4>
        <hr></hr>
        <ul>
          <li>Created on: {createdAt}</li>
          <li>Updated on: {updatedAt}</li>
        </ul>
        <hr></hr>
          <h5 onClick={() => {
            this.props.enterNotebookDeletion(this.state.id);
            this.showDeleteNotebookModal();
          }}>Delete Notebook</h5>
        <hr></hr>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="notebook-info-icon"></div>
          <input
            type="text"
            name="title"
            className={
              (this.state.title === "") ?
              "notebook-form-title notebook-form-title-empty" :
              "notebook-form-title"
            }
            value={this.state.title}
            id="title"
            placeholder="Title"
            onChange={(e) => this.handleChange(e)}
          ></input>
          <div className='form-buttons'>
            <input
              id="save-notebook-title-change"
              className={
                (this.state.title === "") ?
                "modal-submit modal-submit-empty" :
                "modal-submit"
              }
             type="submit" value="Save Change"></input>
             <button
               value="Cancel"
               onClick={(e) => this.exitModal(e)}
               className="modal-submit modal-cancel"
               >Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default NotebookInfoModal;
