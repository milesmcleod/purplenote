import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  receiveBarNavType,
  receiveSelectedNotebook,
  receiveSelectedTag
} from '../../actions/ui_actions';
import {
  deleteShortcut
} from '../../actions/shortcut_actions';
import values from 'lodash/values';
import ShortcutsNav from './shortcuts_nav';

const mapStateToProps = (state, ownProps) => ({
  tags: state.entities.tags,
  notes: state.entities.notes,
  notebooks: state.entities.notebooks,
  shortcuts: values(state.entities.shortcuts),
  barNavType: state.ui.barNavType
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setBarNavType: (type) => dispatch(receiveBarNavType(type)),
  deleteShortcut: (id) => dispatch(deleteShortcut(id)),
  selectTag: (id) => {
    dispatch(receiveSelectedTag(id));
    dispatch(receiveBarNavType('notes'));
  },
  selectNotebook: (id) => {
    dispatch(receiveSelectedNotebook(id));
    dispatch(receiveBarNavType('notes'));
  },
  selectNote(note) {
    dispatch(receiveSelectedNotebook(note.notebook_id));
    dispatch(receiveBarNavType('notes'));
    ownProps.history.push(`/home&n=${note.id}`);
  }
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ShortcutsNav));
