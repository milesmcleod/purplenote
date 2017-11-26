import React from 'React';

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
    this.props.postNote(this.state)
    .then(
      response => {

      },
      errors => {

      }
    );
  }

  render() {
    return(
      <div className='new-notebook-modal'>
        <div className='modal-form-errors'>
          <ul>
            {
              this.props.formErrors.map(err => <li>{err}</li>)
            }
          </ul>
        </div>
        <form onSubmit={this.handleSubmit()}>
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
        <button value="Cancel"></button>
        <input type="submit" value="Create Notebook"></input>
        </form>
      </div>
    );
  }
}
