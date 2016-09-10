// @flow
import React from 'react';
import { Editor, EditorState } from 'draft-js';

import 'fonts/hasklig.css';
// import keybindings from '../keybindings';


type Props = {
  editorState?: EditorState;
  onChange: Function;
  onReturn: Function;
};

const SettingsEditorPanel = (props: Props): React.Element<any> => (
  <div style={{ background: '#444', color: '#EEE', overflow: 'auto', width: '100%' }}>
    <style>
      {`.public-DraftEditor-content {
        box-sizing: border-box;
        height: 100vh;
        padding: 0.5em 0.5em 0.5em 0.125em;
      }`}
    </style>
    <div
      style={{
        // alignItems: 'stretch',
        // display: 'flex',
        // flexDirection: 'row',
        fontFamily: 'Hasklig',
        fontSize: '0.8em',
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
          width: 'calc(100% - 15px - 0.5em)',
        }}
      >
        {props.editorState
          ? <Editor
            editorState={props.editorState}
            // keyBindingFn={keybindings}
            handleReturn={props.onReturn}
            onChange={props.onChange}
          />
          : null}
      </div>
    </div>
  </div>
);


export default SettingsEditorPanel;
