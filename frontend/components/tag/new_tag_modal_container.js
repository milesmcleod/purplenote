import { connect } from 'react-redux';
import NewTagModal from './new_tag_modal';
import { postTag } from '../../actions/tag_actions';
import { deactivateModal } from '../../actions/ui_actions';
import values from 'lodash/values';

const mapStateToProps = (state) => {
  const titles = [];
  values(state.entities.tags).forEach(tag => titles.push(tag.title));
  return {
    titles,
    activeModal: state.ui.activeModal
  };
};

const mapDispatchToProps = (dispatch) => ({
  postTag: (tag) => dispatch(postTag(tag)),
  deactivateModal: () => dispatch(deactivateModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTagModal);
