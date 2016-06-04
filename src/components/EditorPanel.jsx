import React from 'react';
import { Editor } from 'draft-js';
import { connect } from 'react-redux';

import actions from '../actions';
// import keybindings from '../keybindings';


const EditorPanel = (props) => (
  <Editor
    editorState={props.editorState}
    // keyBindingFn={keybindings}
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
    onChange: (next) => dispatch(actions.EDIT(next)),
    onTab: function onTab(event) {
      event.preventDefault();
      dispatch(actions.MACRO());
    },
  })
)(EditorPanel);
