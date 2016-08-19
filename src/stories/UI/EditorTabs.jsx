// @flow
import 'normalize.css';
import I from 'seamless-immutable';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { storiesOf } from '@kadira/storybook';

import 'fonts/proxima-nova.css';
import reducer from 'reducer';
import { EditorTabs } from 'components/Connectors';

const mockState = I.from({
  activeTab: 1,
  editors: [
    { patient: { firstName: 'Tab', lastName: 'One' } },
    { patient: { firstName: 'Tab', lastName: 'Two' } },
    { patient: { firstName: 'Tab', lastName: 'Three' } },
  ],
});

const mockStore = createStore(
  reducer,
  mockState
);

storiesOf('Editor Tabs', module)
  .add('connected', (): React.Element<any> => (
    <div style={{ fontFamily: 'Proxima Nova' }}>
      <Provider store={mockStore}>
        <EditorTabs />
      </Provider>
    </div>
  ));
