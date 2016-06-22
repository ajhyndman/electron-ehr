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
    case 'OPENPATIENTSETTINGS': {
      store.dispatch(actions.OPENPATIENTSETTINGS());
      break;
    }
    case 'NEWTAB': {
      store.dispatch(actions.NEWTAB(data));
      break;
    }
    default: {
      return;
    }
    }
  }
);

// const holder = document.getElementsByClassName('public-DraftEditor-content')[0];

// holder.ondrop = function ondrop(e) {
//   e.preventDefault();
//   e.stopPropagation();
//   const file = e.dataTransfer.files[0];
//   console.log('File you dragged here is', file.path);
//   return false;
// };
