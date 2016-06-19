import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Sidebar from 'components/Sidebar';
import store from 'store';
import { EditorPanel } from 'components/Connectors';


// TODO: derive width from a setting
const width = 180;

ReactDOM.render(
  <div>
    <Provider store={store}>
      <Sidebar width={width} />
    </Provider>
    <div
      style={{
        float: 'left',
        height: '100%',
        overflow: 'auto',
        width: `calc(100% - ${width}px)`,
      }}
    >
      <Provider store={store}>
        <EditorPanel onDrop={(event) => { console.log(event); return true; }} />
      </Provider>
    </div>
  </div>,
  document.getElementById('app')
);

// const holder = document.getElementsByClassName('public-DraftEditor-content')[0];

// holder.ondrop = function ondrop(e) {
//   e.preventDefault();
//   e.stopPropagation();
//   const file = e.dataTransfer.files[0];
//   console.log('File you dragged here is', file.path);
//   return false;
// };
