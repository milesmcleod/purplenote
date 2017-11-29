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
    this.setState(newProps.tag);
  }

  handleChange(e) {
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

  slideBackEditTitle() {
    const tagInfo = document.getElementById(`title-${this.props.tag.id}`);
    tagInfo.classList.remove('tags-nav-item-info-slide');
  }

  showEditForm() {
    const tagArea = document.getElementById(`tags-nav-item-${this.props.tag.id}`);
    tagArea.classList.add('hide-tag-elements');
    window.setTimeout(() => {
      const tagInfo = document.getElementById(`title-${this.props.tag.id}`);
      const tagForm = document.getElementById(`form-${this.props.tag.id}`);
      tagForm.classList.add('edit-tag-form-show');
      tagInfo.classList.add('hide-tag-title');
      tagForm.focus();
      const value = tagForm.value;
      tagForm.value = '';
      tagForm.value = value;
      const submit = document.getElementById(`submit-tag-edit-${this.props.tag.id}`);
      submit.classList.add('show-submit-tag-edit');
    }, 501);
  }

  closeEditForm() {
    const tagArea = document.getElementById(`tags-nav-item-${this.props.tag.id}`);
    tagArea.classList.remove('hide-tag-elements');
    const tagForm = document.getElementById(`form-${this.props.tag.id}`);
    tagForm.classList.remove('edit-tag-form-show');
    const submit = document.getElementById(`submit-tag-edit-${this.props.tag.id}`);
    submit.classList.add('submit-tag-edit-color');
    const icons = document.getElementsByClassName(`tag-icon-${this.props.tag.id}`);
    for (let i = 0; i < icons.length; i ++) {
      icons[i].classList.remove('hide-tag-elements');
    }
    window.setTimeout(() => {
      submit.classList.add('submit-tag-edit-fade');
    }, 1000);
    window.setTimeout(() => {
      submit.classList.remove('submit-tag-edit-fade');
      submit.classList.remove('submit-tag-edit-color');
      submit.classList.remove('show-submit-tag-edit');
    }, 2000);
    const tagInfo = document.getElementById(`title-${this.props.tag.id}`);
    tagInfo.classList.remove('hide-tag-title');
    window.setTimeout(() => {
      const container = document.getElementById(`tags-nav-item-${this.props.tag.id}`);
      container.classList.remove('tags-no-show-on-hover');
    }, 501);
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    this.closeEditForm();
    this.props.patchTag(this.state);
    window.setTimeout(() => this.slideBackEditTitle());
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
            onClick={(e) => {
              e.preventDefault();
              this.props.selectTag();
            }}
            className='tags-nav-item-info' id={`title-${this.props.tag.id}`}>
            <article><h4>{this.state.title}</h4></article><p>{this.props.tagCount}</p>
          </div>
          <span className={`tag-icon-star tag-icon-${this.props.tag.id}`}></span>
          <span
            className={`tag-icon-edit tag-icon-${this.props.tag.id}`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              const container = document.getElementById(`tags-nav-item-${this.props.tag.id}`);
              container.classList.add('tags-no-show-on-hover');
              const icons = document.getElementsByClassName(`tag-icon-${this.props.tag.id}`);
              for (let i = 0; i < icons.length; i ++) {
                icons[i].classList.add('hide-tag-elements');
              }
              this.showEditForm();
              this.slideEditTitle();
            }}
            ></span>
          <span
            className={`tag-icon-trash tag-icon-${this.props.tag.id}`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              this.props.enterTagDeletion(this.props.tag.id);
              this.props.activateModal('deleteTag');
              this.showDeleteTagModal();
            }}
            ></span>
        </section>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            id={`form-${this.props.tag.id}`}
            className="edit-tag-form"
            value={this.state.title}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => this.handleChange(e)}
          ></input>
        <article
          id={`submit-tag-edit-${this.props.tag.id}`}
          className='submit-tag-edit'
          onClick={(e) => this.handleSubmit(e)}>&#10004;</article>
        </form>
      </div>
    );
  }
}

export default TagsNavItem;
