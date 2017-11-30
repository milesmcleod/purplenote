import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
    this.sendSearch = this.sendSearch.bind(this);
  }

  handleChange(e) {
    this.setState({query: e.target.value});
  }

  componentDidMount () {
    const input = document.getElementsByClassName("main-search-input")[0];
    input.focus();
    input.addEventListener("keydown", this.sendSearch);
  }

  componentWillUnmount() {
    const input = document.getElementsByClassName("main-search-input")[0];
    input.removeEventListener("keydown", this.sendSearch);
  }

  sendSearch (e) {
    if (e.keyCode === 13) {
      this.props.setBarNavType("notes");
      this.props.setSearchQuery(this.state.query);
      this.setState({ query: "" });
    }
  }

  render() {
    return (
      <div className='search-body'>
        <input
          className='main-search-input'
          onChange={(e) => this.handleChange(e)}
          placeholder='search notes'
          value={this.state.query}
          ></input>
      </div>
    );
  }
}

export default Search;
