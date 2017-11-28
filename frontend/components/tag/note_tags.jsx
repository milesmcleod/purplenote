import React from 'react';

class NoteTags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: {
        title: ""
      },
      selectedTag: undefined
    };
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      tag: {
        title: e.target.value
      }
    });
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      tag: {
        title: ""
      },
      selectedTag: undefined
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    if (this.props.tagTitles.includes(this.state.tag.title)) {
      const selectedTag = this.props.tags.filter(tag => (
        tag.title === this.state.tag.title
      ))[0];
      this.props.postTagging({
        note_id: this.props.selectedNote,
        tag_id: selectedTag.id
      });
    } else {
      this.props.postTag(this.state.tag);
    }
  }

  selectTag(e) {
    const noteTags = document.getElementsByClassName("note-tags-li");
    if (e.currentTarget.classList.contains('selected-note-tags-li')) {
      e.currentTarget.classList.remove('selected-note-tags-li');
    } else {
      for (let i = 0; i < noteTags.length; i++){
        noteTags[i].classList.remove('selected-note-tags-li');
      }
      e.currentTarget.classList.add('selected-note-tags-li');
    }
  }

  render() {
    return (
      <div className='secondary-note-top'>
        <ul className='note-tags-ul'>
          {
            this.props.ownTags.map(tag => (
              <li
                className="note-tags-li"
                onClick={(e) => this.selectTag(e)}
                >{tag.title}</li>
            ))
          }
        </ul>
        <form
          className="new-note-tag-form"
          onSubmit={(e) => this.handleSubmit(e)}
          >
          <input
            placeholder="+"
            className="new-note-tag-input"
            onInput={(e) => this.handleChange(e)}
            type='text'
            value={this.state.tag.title}
            ></input>
        </form>
      </div>
    );
  }
}

export default NoteTags;
