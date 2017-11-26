import React from 'react';

class NewNotebookModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.postNotebook(this.state)
    .then(() => this.exitModal());
  }

  exitModal(e) {
    if (e) e.preventDefault();
    const modalBackground = document.getElementById("modalBackground");
    modalBackground.classList.remove("secondary-nav-totality");
    const modal = document.getElementsByClassName('new-notebook-modal')[0];
    modal.classList.remove("new-notebook-modal-show");
  }

  render() {
    console.log(this.state);
    return(
      <div className='new-notebook-modal'>
        <div className='modal-form-errors'>
          <ul>
          </ul>
        </div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="new-notebook-form-icon"></div>
          <h4>CREATE NOTEBOOK</h4>
          <hr></hr>
          <input
            type="text"
            name="title"
            className="note-content-form-title"
            value={this.state.title}
            id="title"
            placeholder="Title your note"
            onChange={(e) => this.handleChange(e)}
          ></input>
        <button
          value="Cancel"
          onClick={(e) => this.exitModal(e)}
          >Cancel</button>
        <input type="submit" value="Create Notebook"></input>
        </form>
      </div>
    );
  }
}

export default NewNotebookModal;
