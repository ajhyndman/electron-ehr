import { connect } from 'react-redux';

import actions from '../actions';
import disconnectedEditorPanel from 'components/EditorPanel';


export const EditorPanel = connect(
  (state) => ({ editorState: state.get('editor') }),
  (dispatch) => ({
    onChange: (next) => dispatch(actions.EDIT(next)),
    onTab: function onTab(event) {
      event.preventDefault();
      dispatch(actions.MACRO());
    },
  })
)(disconnectedEditorPanel);
