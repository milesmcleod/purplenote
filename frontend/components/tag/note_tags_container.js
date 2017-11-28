import { connect } from 'react-redux';
import NoteTags from './note_tags';
import { withRouter } from 'react-router-dom';
import values from 'lodash/values';
import {
  postNote,
  patchNote
} from '../../actions/note_actions';
import { postTag } from '../../actions/tag_actions';
import {
  postTagging,
  patchTagging
} from '../../actions/tagging_actions';

const mapStateToProps = (state, ownProps) => {
  const note = state.entities.notes[ownProps.match.params.noteId];
  const ownTags = values(state.entities.tags).filter(tag =>(
    note.tagIds.includes(tag.id)
  ));
  const tagTitles = [];
  const tags = values(state.entities.tags);
  tags.forEach(tag => tagTitles.push(tag.title));
  return {
    selectedNote: ownProps.match.params.noteId,
    note,
    ownTags,
    tags,
    tagTitles
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  patchNote: (note) => dispatch(patchNote(note)),
  postTag: (tag) => {
    dispatch(postTag(tag))
    .then(r => dispatch(postTagging({
      note_id: ownProps.match.params.noteId,
      tag_id: r.payload.id
    })));
  },
  postTagging: (tagging) => dispatch(postTagging(tagging)),
  patchTagging: (tagging) => dispatch(patchTagging(tagging))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteTags));
