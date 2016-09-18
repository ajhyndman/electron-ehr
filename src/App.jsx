// @flow
import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ipcRenderer } from 'electron';

import Sidebar from 'components/Sidebar';
import actions from 'actions';
import store from 'store';
import { EditorPanel, PatientSettingsModal, SettingsEditorPanel } from 'components/Connectors';
import type { ActionType } from 'actions';


// TODO: derive width from a setting
const width = 180;

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Sidebar width={width} />
      <div
        style={{
          float: 'left',
          height: '100%',
          overflow: 'auto',
          width: `calc(100% - ${width}px)`,
        }}
      >
        <EditorPanel />
        <SettingsEditorPanel />
      </div>
      <PatientSettingsModal />
    </div>
  </Provider>,
  document.getElementById('app')
);

ipcRenderer.on(
  'ACTION',
  function dispatchMenuAction(event: Event, type: ActionType, data: any): void {
    switch (type) {
    case 'COMMIT_TAB': {
      store.dispatch(actions.COMMIT_TAB());
      break;
    }
    case 'OPEN_PATIENT_SETTINGS': {
      store.dispatch(actions.OPEN_PATIENT_SETTINGS());
      break;
    }
    case 'MACROS_OPEN': {
      store.dispatch(actions.MACROS_OPEN());
      break;
    }
    case 'NEW_TAB': {
      store.dispatch(actions.NEW_TAB(data));
      break;
    }
    default: {
      return;
    }
    }
  }
);
