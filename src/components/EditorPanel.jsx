import React from 'react';
import { Editor } from 'draft-js';

import 'fonts/proxima-nova.css';
// import keybindings from '../keybindings';


const EditorPanel = (props) => (
  <div style={{ width: '100%' }}>
    <div
      style={{
        // alignItems: 'stretch',
        // display: 'flex',
        // flexDirection: 'row',
        fontFamily: 'Proxima Nova',
        lineHeight: '1.33em',
      }}
    >
      <div
        className="margin"
        style={{
          // flex: '0 0 15px',
          float: 'left',
          height: '100%',
          paddingLeft: '0.5em',
          position: 'fixed',
          width: '15px',
        }}
      />
      <div
        style={{
          boxSizing: 'border-box',
          // flex: '1 1',
          float: 'left',
          marginLeft: 'calc(15px + 0.5em)',
          padding: '0.5em 0.5em 0.5em 0.125em',
          width: 'calc(100% - 15px - 0.5em)',
        }}
      >
        <Editor
          editorState={props.editorState}
          // keyBindingFn={keybindings}
          onChange={props.onChange}
          onTab={props.onTab}
        />
      </div>
    </div>
  </div>
);

EditorPanel.propTypes = {
  editorState: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onTab: React.PropTypes.func.isRequired,
};


export default EditorPanel;
