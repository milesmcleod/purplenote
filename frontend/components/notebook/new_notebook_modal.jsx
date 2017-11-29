import React from 'react';

class NewNotebookModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleKeypress = this.handleKeypress.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.activeModal === 'newNotebook') {
      document.addEventListener("keydown", this.handleKeypress);
    }
  }

  handleKeypress(e) {
    const modalBackground = document.getElementById("modalBackground");
    if (modalBackground.classList.contains("secondary-nav-totality")) {
      if (e.keyCode === 27) {
        console.log('exited new notebook modal');
        this.exitModal(e);
      } else if (e.keyCode === 13 && this.state.title !== "") {
        console.log('submitted new notebook');
        this.handleSubmit(e);
      }
    }
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
    window.setTimeout(() => {
      if (this.props.titles.includes(this.state.title)) {
        const errors = document.getElementsByClassName("modal-form-errors")[0];
        errors.classList.add("modal-form-errors-show");
        const submit = document.getElementsByClassName("modal-submit")[0];
        submit.classList.add("modal-submit-empty");
      } else if (this.state.title === '') {
        const submit = document.getElementsByClassName("modal-submit")[0];
        submit.classList.add("modal-submit-empty");
      } else {
        const errors = document.getElementsByClassName("modal-form-errors")[0];
        errors.classList.remove("modal-form-errors-show");
        const submit = document.getElementsByClassName("modal-submit")[0];
        submit.classList.remove("modal-submit-empty");
      }
    }, 20);
  }

  handleSubmit(e) {
    if (this.state.title === "") {
      e.preventDefault();
    } else if (this.props.titles.includes(this.state.title)) {
      e.preventDefault();
      const errors = document.getElementsByClassName("modal-form-errors")[0];
      errors.classList.add("modal-form-errors-show");
      const submit = document.getElementsByClassName("modal-submit")[0];
      submit.classList.add("modal-submit-empty");
    } else {
      e.preventDefault();
      this.props.deactivateModal();
      document.addEventListener("keydown", this.handleKeypress);
      const notebook = Object.assign({}, this.state);
      this.props.postNotebook(notebook);
      this.exitModal(0);
      window.setTimeout(() => {
        this.setState({
          title: ""
        });
      }, 400);
    }
  }

  exitModal(e) {
    if (e) e.preventDefault();
    document.removeEventListener("keydown", this.handleKeypress);
    const modalBackground = document.getElementById("modalBackground");
    modalBackground.classList.remove("secondary-nav-totality");
    const modal = document.getElementsByClassName('new-notebook-modal')[0];
    modal.classList.remove("new-notebook-modal-fade-in");
    window.setTimeout(() => {
      modal.classList.remove("new-notebook-modal-show");
    }, 400);
  }

  render() {
    return(
      <div className='new-notebook-modal'>
        <div className='modal-form-errors'>
          <p>
            The notebook title entered already exists. Please choose another title.
          </p>
        </div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="new-notebook-form-icon"></div>
          <h4>CREATE NOTEBOOK</h4>
          <hr></hr>
          <input
            type="text"
            name="title"
            autoFocus
            className={
              (this.state.title === "") ?
              "notebook-form-title notebook-form-title-empty" :
              "notebook-form-title"
            }
            value={this.state.title}
            id="title"
            placeholder="Title your notebook"
            onChange={(e) => this.handleChange(e)}
          ></input>
          <div className='form-buttons'>
            <input
              className={
                (this.state.title === "") ?
                "modal-submit modal-submit-empty" :
                "modal-submit"
              }
             type="submit" value="Create Notebook"></input>
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

export default NewNotebookModal;
