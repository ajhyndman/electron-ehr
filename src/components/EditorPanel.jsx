import React from 'react';
import { connect } from 'react-redux';
import { Editor } from 'draft-js';

import actions from '../actions';
import keybindings from '../keybindings';


const EditorPanel = (props) => (
  <Editor
    editorState={props.editorState}
    keyBindingFn={keybindings}
    onChange={props.onChange}
    onTab={props.onTab}
  />
);

EditorPanel.propTypes = {
  editorState: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onTab: React.PropTypes.func.isRequired,
};


export default connect(
  (state) => ({ editorState: state.get('editor') }),
  (dispatch) => ({
    onChange: (next) => dispatch(actions.edit(next)),
    onTab: function onTab(event) {
      event.preventDefault();
      dispatch(actions.macro());
    },
  })
)(EditorPanel);
