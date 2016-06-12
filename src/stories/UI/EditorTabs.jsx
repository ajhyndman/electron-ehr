import 'reset-css/reset.css';
import Immutable from 'immutable';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { storiesOf } from '@kadira/storybook';

import 'fonts/proxima-nova.css';
import reducer from 'reducer';
import { EditorTabs } from 'components/Connectors';

const mockState = Immutable.fromJS({
  activeTab: 1,
  editors: [
    { name: 'Tab One' },
    { name: 'Tab Two' },
    { name: 'Tab Three' },
  ],
});

const mockStore = createStore(
  reducer,
  mockState
);

storiesOf('Editor Tabs', module)
  .add('connected', () => (
    <div style={{ fontFamily: 'Proxima Nova' }}>
      <Provider store={mockStore}>
        <EditorTabs />
      </Provider>
    </div>
  ));
