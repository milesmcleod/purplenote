import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  receiveBarNavType,
  receiveSelectedTag,
  enterTagDeletion
} from '../../actions/ui_actions';
import {
  patchTag
} from '../../actions/tag_actions';
import values from 'lodash/values';
import TagsNav from './tags_nav';
import { deleteTag } from '../../actions/tag_actions';

const mapStateToProps = (state, ownProps) => ({
  tags: values(state.entities.tags),
  notes: values(state.entities.notes),
  barNavType: state.ui.barNavType,
  selectedTag: state.ui.selectedTag
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setBarNavType: (type) => dispatch(receiveBarNavType(type)),
  enterTagDeletion: (id) => dispatch(enterTagDeletion(id)),
  patchTag: (tag) => dispatch(patchTag(tag)),
  selectTag: (id) => {
    dispatch(receiveSelectedTag(id));
    dispatch(receiveBarNavType('notes'));
  }
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsNav));
