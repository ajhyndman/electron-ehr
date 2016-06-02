import React from 'react';
import ReactRedux from 'react-redux';
import { Editor } from 'draft-js';

import { edit } from './actions';


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


export default ReactRedux.connect(
  (state) => ({ editorState: state.get('editor') }),
  (dispatch) => ({ onChange: (next) => dispatch(edit(next)) })
)(EditorPanel);
