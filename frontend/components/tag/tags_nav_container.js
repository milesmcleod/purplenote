import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  receiveBarNavType,
  receiveSelectedTag,
  enterTagDeletion,
  activateModal
} from '../../actions/ui_actions';
import {
  postShortcut,
  patchShortcut
 } from '../../actions/shortcut_actions';
import {
  patchTag
} from '../../actions/tag_actions';
import values from 'lodash/values';
import TagsNav from './tags_nav';
import { deleteTag } from '../../actions/tag_actions';

const mapStateToProps = (state, ownProps) => {
  const tagShortcuts = values(state.entities.shortcuts).filter((s) => (
    s.type = 'Tag'
  ));
  let shortcutTagIds = [];
  tagShortcuts.forEach(s => shortcutTagIds.push(s.shortcut_element_id));
  return {
    tags: values(state.entities.tags),
    notes: values(state.entities.notes),
    barNavType: state.ui.barNavType,
    selectedTag: state.ui.selectedTag,
    shortcutTagIds
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  setBarNavType: (type) => dispatch(receiveBarNavType(type)),
  enterTagDeletion: (id) => dispatch(enterTagDeletion(id)),
  postShortcut: (shortcut) => dispatch(postShortcut(shortcut)),
  patchShortcut: (shortcut) => dispatch(patchShortcut(shortcut)),
  patchTag: (tag) => dispatch(patchTag(tag)),
  activateModal: (modalType) => dispatch(activateModal(modalType)),
  selectTag: (id) => {
    dispatch(receiveSelectedTag(id));
    dispatch(receiveBarNavType('notes'));
  }
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsNav));
