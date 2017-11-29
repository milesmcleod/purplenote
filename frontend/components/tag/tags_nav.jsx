import React from 'react';
import TagsNavItem from './tags_nav_item';
import NewTagModalContainer from './new_tag_modal_container';
import DeleteTagModalContainer from './delete_tag_modal_container';

class TagsNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: this.props.tags,
      tagsModal: (<div></div>),
      newTag: {
        title: ""
      }
    };
  }

  comparator(property) {
    let a, b;
    return function (x, y) {
      a = x[property].toLowerCase();
      b = y[property].toLowerCase();
      if (a > b) {
        return 1;
      } else {
        return -1;
      }
    };
  }

  sortTags(tags, property) {
    tags.sort(this.comparator(property));
  }

  componentWillReceiveProps (newProps) {
    if (newProps.barNavType === 'tags') {
      const nav = document.getElementById('tagsNav');
      nav.classList.add('secondary-nav-container-show');
      if (this.props.barNavType === 'notes') {
        const modal = document.getElementById('modalBackground');
        modal.classList.add('secondary-nav-background-show');
      }
      this.sortTags(newProps.tags, 'title');
    } else {
      const nav = document.getElementById('tagsNav');
      nav.classList.remove('secondary-nav-container-show');
      if (newProps.barNavType === 'notes') {
        const modal = document.getElementById('modalBackground');
        modal.classList.remove('secondary-nav-background-show');
      }
    }
  }

  showNewTagModal() {
    this.props.activateModal('newTag');
    const modalBackground = document.getElementById("modalBackground");
    modalBackground.classList.add("secondary-nav-totality");
    const modal = document.getElementsByClassName('new-tag-modal')[0];
    modal.classList.add("new-notebook-modal-show");
    window.setTimeout(() => {
      modal.classList.add("new-notebook-modal-fade-in");
    }, 0);
  }

  render () {
    const alphabet = {};
    this.props.tags.forEach(tag => {
      if (alphabet[tag.title[0].toUpperCase()]) {
        alphabet[tag.title[0].toUpperCase()].push(tag);
      } else {
        alphabet[tag.title[0].toUpperCase()] = [tag];
      }
    });
    return (
      <div>
        <div
          id='tagsNav'
          className='secondary-nav-container'>
          <header className='notebooks-header'>
            <h4>TAGS</h4>
            <div
              className="tag-creation-button"
              onClick={() => this.showNewTagModal()}
              ></div>
            {this.state.notebooksModal}
          </header>
          <div id='tags-nav' className='tags-nav'>
            {
              Object.keys(alphabet).map(letter => (
                <ul className='tag-letter' key={`tag-letter-${letter}`}>
                  <h3>{letter}</h3>
                  {
                    alphabet[letter].map(tag => (
                      <li key={`tags${tag.id}`}>
                        <TagsNavItem
                          enterTagDeletion={this.props.enterTagDeletion}
                          activateModal={this.props.activateModal}
                          patchTag={this.props.patchTag}
                          tag={tag}
                          selectTag={() => this.props.selectTag(tag.id)}
                          selected={(
                            this.props.selectedTag === tag.id
                          ) ? 'true' : false}
                          tagCount={
                            this.props.notes.filter(note => (
                              note.tagIds.includes(tag.id) &&
                              note.trashBoolean === false
                            )).length
                          }
                          id={tag.id}
                        />
                    </li>
                    ))
                  }
                </ul>
              ))
            }
          </div>

        </div>
        <div
          id = 'modalBackground'
          className='secondary-nav-background'
          onClick={(e) => this.props.setBarNavType('notes')}
        ></div>
      <NewTagModalContainer />
      <DeleteTagModalContainer />
      </div>
    );
  }
}

export default TagsNav;
