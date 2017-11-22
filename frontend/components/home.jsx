import React from 'react';
import SideBarContainer from './note/side_bar_container';

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
      </div>
    );
  }
}

export default Home;
