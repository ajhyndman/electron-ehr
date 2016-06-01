import React from 'react';
import { Editor, EditorState } from 'draft-js';


class EditorPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = (editorState) => this.setState({ editorState });
  }

  render() {
    return (
      <Editor
        editorState={this.state.editorState}
        onChange={this.onChange}
        style={{ minHeight: 200 }}
      />
    );
  }
}


export default EditorPanel;
