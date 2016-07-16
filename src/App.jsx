import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ipcRenderer } from 'electron';

import Sidebar from 'components/Sidebar';
import actions from 'actions';
import store from 'store';
import { EditorPanel, PatientSettingsModal } from 'components/Connectors';


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
      </div>
      <PatientSettingsModal />
    </div>
  </Provider>,
  document.getElementById('app')
);

ipcRenderer.on(
  'ACTION',
  function dispatchMenuAction(event, type, data) {
    switch (type) {
    case 'OPEN_PATIENT_SETTINGS': {
      store.dispatch(actions.OPEN_PATIENT_SETTINGS());
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
