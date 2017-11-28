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
    e.stopPropagation();
    this.setState({
      title: e.target.value
    });
  }

  showDeleteTagModal() {
    const modalBackground = document.getElementById("modalBackground");
    modalBackground.classList.add("secondary-nav-totality");
    const modal = document.getElementsByClassName('delete-tag-modal')[0];
    modal.classList.add("new-notebook-modal-show");
    window.setTimeout(() => {
      modal.classList.add("new-notebook-modal-fade-in");
    }, 0);
  }

  slideEditTitle() {
    const tagInfo = document.getElementById(`title-${this.props.tag.id}`);
    tagInfo.classList.add('tags-nav-item-info-slide');
  }

  showEditForm() {
    console.log('hit');
    window.setTimeout(() => {
      const tagInfo = document.getElementById(`title-${this.props.tag.id}`);
      const icons = document.getElementsByClassName(`tag-icon-${this.props.tag.id}`);
      for (let i = 0; i < icons.length; i ++) {
        icons[i].classList.add('hide-tag-elements');
      }
      const container = document.getElementById(`tags-nav-item-${this.props.tag.id}`);
      container.classList.add('tags-no-show-on-hover');
      tagInfo.classList.add('hide-tag-elements');
      const tagForm = document.getElementById(`form-${this.props.tag.id}`);
      tagForm.classList.add('edit-tag-form-show');
      tagForm.focus();
      const value = tagForm.value;
      tagForm.value = '';
      tagForm.value = value;
    }, 501);
  }


  render() {
    return (
      <div
        id={`tags-nav-item-${this.props.tag.id}`}
        className={
          (this.props.selected) ? 'tags-nav-item tags-nav-item-selected' : 'tags-nav-item'
        }
        >
        <section className='tags-item-container'>
          <div
            className='tags-nav-item-info' id={`title-${this.props.tag.id}`}>
            <h4>{this.state.title}<p>{this.props.tagCount}</p></h4>
          </div>
          <span className={`tag-icon-star tag-icon-${this.props.tag.id}`}>S</span>
          <span
            className={`tag-icon-edit tag-icon-${this.props.tag.id}`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              this.showEditForm();
              this.slideEditTitle();
            }}
            >E</span>
          <span
            className={`tag-icon-trash tag-icon-${this.props.tag.id}`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              this.props.enterTagDeletion(this.props.tag.id);
              this.showDeleteTagModal();
            }}
            >T</span>
        </section>
        <input
          id={`form-${this.props.tag.id}`}
          className="edit-tag-form"
          value={this.state.title}
          onChange={(e) => this.handleChange()}
        ></input>
      </div>
    );
  }
}

export default TagsNavItem;
