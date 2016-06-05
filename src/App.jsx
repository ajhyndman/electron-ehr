import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import EditorPanel from 'components/EditorPanel';
import store from 'store';


ReactDOM.render(
  <Provider store={store}>
    <EditorPanel />
  </Provider>,
  document.getElementById('app')
);
