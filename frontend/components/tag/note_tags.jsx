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
    this.deselectTag = this.deselectTag.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

  selectTag(e) {
    const noteTags = document.getElementsByClassName("note-tags-li");
    if (e.currentTarget.classList.contains('selected-note-tags-li')) {
      e.currentTarget.classList.remove('selected-note-tags-li');
    } else {
      for (let i = 0; i < noteTags.length; i++){
        noteTags[i].classList.remove('selected-note-tags-li');
      }
      e.currentTarget.classList.add('selected-note-tags-li');
      document.addEventListener('click', this.deselectTag);
      document.addEventListener('keydown', this.handleDelete);
      this.setState({selectedTag: e.currentTarget});
    }
  }

  deselectTag(e) {
    if (e.target !== this.state.selectedTag) {
      const noteTags = document.getElementsByClassName("note-tags-li");
      for (let i = 0; i < noteTags.length; i++){
        noteTags[i].classList.remove('selected-note-tags-li');
      }
      document.removeEventListener("click", this.deselectTag);
      document.removeEventListener("keydown", this.handleDelete);
    }
  }

  handleDelete(e) {
    e.preventDefault();
    e.stopPropagation();
    const element = document.getElementsByClassName("selected-note-tags-li")[0];
    if (e.keyCode === 8) {
      this.props.deleteTagging({note_id: this.props.selectedNote, tag_id: this.state.selectedTag.id});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    if (this.props.tagTitles.includes(this.state.tag.title)) {
      const selectedTag = this.props.tags.filter(tag => (
        tag.title === this.state.tag.title
      ))[0];
      const ownTag = this.props.ownTags.filter(tag => tag.title === this.state.tag.title)[0];
      if (ownTag) {
        const errors = document.getElementsByClassName('note-top-tag-errors')[0];
        errors.classList.add('note-top-tag-errors-show');
        window.setTimeout(() => errors.classList.remove('note-top-tag-errors-show'), 2000);
      } else {
        this.props.postTagging({
          note_id: this.props.selectedNote,
          tag_id: selectedTag.id
        })
        .then(() => this.props.updateNote());
      }
    } else {
      this.props.postTag(this.state.tag);
      this.props.updateNote();
    }
  }

  render() {
    return (
      <div className='secondary-note-top'>
        <div className='note-top-tag-errors'>
          <p>
            This tagging already exists. Please choose another title.
          </p>
        </div>
        <ul className='note-tags-ul'>
          {
            this.props.ownTags.map(tag => (
              <li
                className="note-tags-li"
                onClick={(e) => this.selectTag(e)}
                key={`tag-${tag.title}`}
                id={tag.id}
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
