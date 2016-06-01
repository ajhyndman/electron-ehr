import React from 'react';
import { Editor } from 'draft-js';
import { connect } from 'react-redux';


const EditorPanel = (props) => (
  <Editor
    editorState={props.editorState}
    onChange={props.onChange}
  />
);

EditorPanel.propTypes = {
  editorState: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired,
};


export default connect(
  (state) => ({ editorState: state.get('editor') }),
  (dispatch) => ({ onChange: (next) => (dispatch({ type: 'EDIT', next })) })
)(EditorPanel);
