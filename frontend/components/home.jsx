import React from 'react';
import SideBarContainer from './note/side_bar_container';
import NoteBodyContainer from './note/note_body_container';
import { Route, Switch } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return (
      <div className='home'>
        <SideBarContainer />
        <Route exact path='/home&n=:noteId' component={NoteBodyContainer}/>
      </div>
    );
  }
}

export default Home;
