import React from 'react';

class NewTagModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
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
      const tag = Object.assign({}, this.state);
      this.props.postTag(tag);
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
    const modalBackground = document.getElementById("modalBackground");
    modalBackground.classList.remove("secondary-nav-totality");
    const modal = document.getElementsByClassName('new-tag-modal')[0];
    modal.classList.remove("new-notebook-modal-fade-in");
    window.setTimeout(() => {
      modal.classList.remove("new-notebook-modal-show");
    }, 400);
  }

  render() {
    return(
      <div className='new-tag-modal'>
        <div className='modal-form-errors'>
          <p>
            The tag title entered already exists. Please choose another title.
          </p>
        </div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="new-tag-form-icon"></div>
          <h4>CREATE TAG</h4>
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
            placeholder="Title your tag"
            onChange={(e) => this.handleChange(e)}
          ></input>
          <div className='form-buttons'>
            <input
              className={
                (this.state.title === "") ?
                "modal-submit modal-submit-empty" :
                "modal-submit"
              }
             type="submit" value="Create Tag"></input>
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

export default NewTagModal;
