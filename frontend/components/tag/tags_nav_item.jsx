import React from 'react';

class TagsNavItem extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.tag) {
      this.state = this.props.tag;
    } else {
      this.state = {
        title: ""
      };
    }
  }

  componentWillReceiveProps(newProps) {
    this.state = newProps.tag;
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      title: e.target.value
    });
  }

  render() {
    return (
      <div className = 'tags-nav-item'>
        <input
          value={this.state.title}
          onChange={(e) => this.handleChange()}
          >

        </input>
      </div>
    );
  }
}

export default TagsNavItem;
