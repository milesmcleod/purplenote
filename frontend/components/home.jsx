import React from 'react';
import SideBarContainer from './note/side_bar_container';
import NoteBodyContainer from './note/note_body_container';
import SearchContainer from './search/search_container';
import { Route, Switch } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotes();
    document.addEventListener("keydown", (e) => this.handleKeypress(e));
    document.addEventListener("click", (e) => this.handleClick(e));
  }

  handleClick(e) {
    if (
      !e.target.classList.contains("sort-options") &&
      !e.target.classList.contains("select-notebook-options") &&
      !e.target.classList.contains("sort-dropdown-link") &&
      !e.target.classList.contains("alt-dropdown-link") &&
      !e.target.classList.contains("select-notebook-dropdown-link")
    ) {
      const dropdown1 = document.getElementsByClassName("sort-options")[0];
      if (dropdown1) dropdown1.classList.remove("show-sort-options");
      const dropdown2 = document.getElementsByClassName("select-notebook-options")[0];
      if (dropdown2) dropdown2.classList.remove("show-select-notebook-options");
    }
  }

  handleKeypress(e) {
    if (e.keyCode === 27 && this.props.fullscreen === true) {
      this.props.exitFullscreen();
    } else if (e.keyCode === 27) {
      const dropdown1 = document.getElementsByClassName("sort-options")[0];
      dropdown1.classList.remove("show-sort-options");
      const dropdown2 = document.getElementsByClassName("select-notebook-options")[0];
      dropdown2.classList.remove("show-select-notebook-options");
    }
  }

  render() {
    return (
      <div className='home'>
        <Route path='/home' component={SideBarContainer}/>
        <Route path='/home&n=:noteId' component={SideBarContainer}/>
        <Route exact path='/home&n=:noteId' component={NoteBodyContainer}/>
        <Route path='/home&n=search' component={SearchContainer}/>
        <Route path='/home&n=search&q=:query' component={SearchContainer}/>
      </div>
    );
  }
}

export default Home;
