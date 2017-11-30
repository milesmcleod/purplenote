import React from 'react';
import NotebooksNavItem from './notebooks_nav_item';
import NewNotebookModalContainer from './new_notebook_modal_container';
import DeleteNotebookModalContainer from './delete_notebook_modal_container';
import NotebookInfoModalContainer from './notebook_info_modal_container';

class NotebooksNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notebooks: this.props.notebooks,
      notebooksModal: (<div></div>),
      newNotebook: {
        title: ""
      },
      searchQuery: ''
    };
  }

  componentWillReceiveProps (newProps) {
    if (newProps.barNavType === 'notebooks') {
      const nav = document.getElementById('notebooksNav');
      nav.classList.add('secondary-nav-container-show');
      if (this.props.barNavType === 'notes') {
        const modal = document.getElementById('modalBackground');
        modal.classList.add('secondary-nav-background-show');
      }
      this.sortNotebooks(newProps.notebooks);
      if (this.state.searchQuery) {
        this.handleSearchQuery(this.state.searchQuery);
      }
    } else {
      const nav = document.getElementById('notebooksNav');
      nav.classList.remove('secondary-nav-container-show');
      if (newProps.barNavType === 'notes') {
        const modal = document.getElementById('modalBackground');
        modal.classList.remove('secondary-nav-background-show');
        this.setState({searchQuery: ""});
      }
    }
  }

  comparator(property, backwards) {
    let a, b;
    return function (x, y) {
      a = (typeof x[property] === 'string') ?
       x[property].toLowerCase() : x[property];
      b = (typeof y[property] === 'string') ?
       y[property].toLowerCase() : y[property];
      if (a > b) {
        if (backwards) {
          return -1;
        } else {
          return 1;
        }
      } else {
        if (backwards) {
          return 1;
        } else {
          return -1;
        }
      }
    };
  }

  sortNotebooks(notebooks) {
    notebooks.sort(this.comparator('title', true));
    this.setState({
      notebooks
    });
  }

  showNewNotebookModal() {
    this.props.activateModal('newNotebook');
    const modalBackground = document.getElementById("modalBackground");
    modalBackground.classList.add("secondary-nav-totality");
    const modal = document.getElementsByClassName('new-notebook-modal')[0];
    modal.classList.add("new-notebook-modal-show");
    window.setTimeout(() => {
      modal.classList.add("new-notebook-modal-fade-in");
    }, 0);
  }

  handleSearchQuery (query) {
    this.setState({
      searchQuery: query,
      notebooks: this.props.notebooks.filter(notebook => (
        notebook.title.toLowerCase().match(query.toLowerCase())
      ))
    });
  }

  render () {
    return (
      <div>
        <div
          id='notebooksNav'
          className='secondary-nav-container'>
          <header className='notebooks-header'>
            <h4>NOTEBOOKS</h4>
            <div
              className="new-notebook-button"
              onClick={() => this.showNewNotebookModal()}
              ></div>
            <input
              className='notebook-search'
              value={this.state.searchQuery}
              placeholder="Find a notebook"
              onChange={(e) => this.handleSearchQuery(e.target.value)}
              ></input>
            {this.state.notebooksModal}
          </header>
          <div id='notebooks-nav' className='notebooks-nav'>
            {
              this.state.notebooks.map(notebook => (
                <div
                  key={notebook.title}
                  onClick={() => this.props.selectNotebook(notebook.id)}>
                  <NotebooksNavItem
                    enterNotebookDeletion={this.props.enterNotebookDeletion}
                    notebook={notebook}
                    postShortcut={this.props.postShortcut}
                    patchShortcut={this.props.patchShortcut}
                    shortcutted={
                      (this.props.shortcutNotebookIds.includes(notebook.id)) ? (
                        true
                      ) : (
                        false
                      )
                    }
                    noteCount={
                      this.props.notes.filter(note => (
                        note.notebook_id === notebook.id &&
                        note.trashBoolean === false
                      )).length
                    }
                    selected={(
                      this.props.selectedNotebook === notebook.id
                    ) ? 'true' : false}
                    id={notebook.id}
                  />
                </div>
              ))
            }
            <div
              onClick={() => this.props.selectNotebook(-1)}
              className="notebook-trash"
              >
              <p>Trash</p>
              <p>{
                  this.props.notes.filter(n => n.trashBoolean === true).length
                }</p>
            </div>
          </div>

        </div>
        <div
          id = 'modalBackground'
          className='secondary-nav-background'
          onClick={(e) => this.props.setBarNavType('notes')}
        ></div>
        <NewNotebookModalContainer />
        <DeleteNotebookModalContainer />
        <NotebookInfoModalContainer />
      </div>
    );
  }
}

export default NotebooksNav;
