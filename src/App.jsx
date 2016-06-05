import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from 'store';
import { EditorPanel } from 'components/redux-connections';


ReactDOM.render(
  <Provider store={store}>
    <EditorPanel />
  </Provider>,
  document.getElementById('app')
);
