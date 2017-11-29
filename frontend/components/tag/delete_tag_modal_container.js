import { connect } from 'react-redux';
import { deleteTag } from '../../actions/tag_actions';
import {
  exitTagDeletion,
  receiveSelectedTag,
  deactivateModal
 } from '../../actions/ui_actions';
import { withRouter } from 'react-router-dom';

import DeleteTagModal from './delete_tag_modal';

const mapStateToProps = (state) => {
  let title = "";
  if (state.ui.tagDeletion) {
    title = state.entities.tags[state.ui.tagDeletion].title;
  }
  return {
    selected: state.ui.selectedTag,
    activeModal: state.ui.activeModal,
    active: state.ui.tagDeletion,
    title
  };
};

const mapDispatchToProps = (dispatch) => ({
  deleteTag: (id) => dispatch(deleteTag(id)),
  receiveSelectedTag: (id) => dispatch(receiveSelectedTag(id)),
  exitTagDeletion: () =>dispatch(exitTagDeletion()),
  deactivateModal: () => dispatch(deactivateModal())
});

export default withRouter (connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteTagModal));
