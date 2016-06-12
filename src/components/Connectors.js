import { connect } from 'react-redux';

import actions from '../actions';
import disconnectedEditorPanel from 'components/EditorPanel';
import disconnectedToggleField from 'components/UI/ToggleField';


export const EditorPanel = connect(
  (state) => ({
    editorState: state
      .get('editors')
      .get(state.get('activeTab'))
      .get('state'),
  }),
  (dispatch) => ({
    onChange(next) { dispatch(actions.EDIT(next)); },
    onTab(event) {
      event.preventDefault();
      dispatch(actions.MACRO());
    },
  })
)(disconnectedEditorPanel);

export const ToggleField = connect(
  null,
  (dispatch) => ({
    onClick(entityKey) { dispatch(actions.TOGGLE(entityKey)); },
  })
)(disconnectedToggleField);
