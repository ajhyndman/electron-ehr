// @flow
import React from 'react';
import { Editor, EditorState } from 'draft-js';

import 'fonts/proxima-nova.css';
// import keybindings from '../keybindings';


type Props = {
  editorState?: EditorState;
  onChange: Function;
  onReturn: Function;
  onTab: Function;
  macroSettingsOpen: boolean;
};

const EditorPanel = (props: Props): ?React.Element<any> => (
  props.macroSettingsOpen
    ? null
    : (
    <div style={{ background: '#FFF', overflow: 'auto', width: '100%' }}>
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
            color: '#9E9E9E',
            float: 'left',
            fontSize: '1.125em',
            fontWeight: '300',
            left: '50%',
            position: 'absolute',
            textAlign: 'center',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: -1,
          }}
        >
          <span style={{ fontSize: '3rem' }}>O_o</span>
          <br />
          <br />
          {"You don't have any charts open"}
        </div>
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
              onTab={props.onTab}
            />
            : null}
        </div>
      </div>
    </div>
    )
);


export default EditorPanel;
