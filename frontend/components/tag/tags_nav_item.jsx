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
      <div className={
          (this.props.selected) ? 'tags-nav-item-selected' : 'tags-nav-item'
        }>
        <input
          disabled
          value={this.state.title}
          onChange={(e) => this.handleChange()}
          >

        </input>
      </div>
    );
  }
}

export default TagsNavItem;
