// @flow
import React from 'react';
import { Editor, EditorState } from 'draft-js';

import 'fonts/proxima-nova.css';
import 'fonts/hasklig.css';
import ButtonPrimary from 'components/UI/ButtonPrimary';
import FloatingWrapper from 'components/UI/FloatingWrapper';
import Hoverable from 'components/UI/Hoverable';
// import keybindings from '../keybindings';


type Props = {
  editorState?: EditorState;
  onChange: Function;
  onReturn: Function;
  onSave: Function;
  macroSettingsOpen: boolean;
};

const SettingsEditorPanel = (props: Props): ?React.Element<any> => (
  props.macroSettingsOpen
    ? (
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
        <Hoverable>
          <FloatingWrapper>
            <ButtonPrimary
              onClick={props.onSave}
              style={{
                fontSize: '1.5em',
                padding: '0.25em 0.5em 0.33em',
                position: 'absolute',
                top: '0.5em',
                right: '2em',
              }}
            >
              Save
            </ButtonPrimary>
          </FloatingWrapper>
        </Hoverable>
        <div
          style={{
            boxSizing: 'border-box',
            // flex: '1 1',
            float: 'left',
            marginLeft: 'calc(15px + 0.5em)',
            width: 'calc(100% - 15px - 0.5em)',
          }}
        >
          <Editor
            editorState={props.editorState}
            // keyBindingFn={keybindings}
            handleReturn={props.onReturn}
            onChange={props.onChange}
          />
        </div>
      </div>
    </div>
    )
    : null
);


export default SettingsEditorPanel;
