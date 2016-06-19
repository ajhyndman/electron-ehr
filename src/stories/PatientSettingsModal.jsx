import 'normalize.css';
import Immutable from 'immutable';
import React from 'react';
import { Provider } from 'react-redux';
import { action, storiesOf } from '@kadira/storybook';
import { createStore } from 'redux';

import DisconnectedPatientSettingsModal from 'components/PatientSettingsModal';
import reducer from 'reducer';
import { PatientSettingsModal } from 'components/Connectors';


const mockPatient = Immutable.Map({
  firstName: 'Andrew',
  lastName: 'Hyndman',
  dob: '1988-10-06',
  gender: 'm',
  address: '131-145 Glebe Point Rd, NSW, 2037',
});

const mockState = Immutable.Map({
  activeTab: 0,
  editors: Immutable.List([
    Immutable.Map({
      patient: mockPatient,
    }),
  ]),
  patientSettingsOpen: true,
});

const mockStore = createStore(
  reducer,
  mockState
);

storiesOf('Patient Settings Modal', module)
  .add('log actions', () => (
    <DisconnectedPatientSettingsModal
      activeTab={0}
      onChange={action('UPDATE PATIENT')}
      open
      patient={mockPatient}
    />
  ))
  .add('with store', () => (
    <Provider store={mockStore}>
      <PatientSettingsModal />
    </Provider>
  ));
