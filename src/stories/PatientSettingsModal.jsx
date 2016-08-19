// @flow
import 'normalize.css';
import I from 'seamless-immutable';
import React from 'react';
import { Provider } from 'react-redux';
import { action, storiesOf } from '@kadira/storybook';
import { createStore } from 'redux';

import DisconnectedPatientSettingsModal from 'components/PatientSettingsModal';
import reducer from 'reducer';
import { PatientSettingsModal } from 'components/Connectors';


const mockPatient = I.from({
  firstName: 'Andrew',
  lastName: 'Hyndman',
  dob: '1988-10-06',
  gender: 'm',
  address: '131-145 Glebe Point Rd, NSW, 2037',
});

const mockState = I.from({
  activeTab: 0,
  editors: [
    {
      patient: mockPatient,
    },
  ],
  patientSettingsOpen: true,
});

const mockStore = createStore(
  reducer,
  mockState
);

storiesOf('Patient Settings Modal', module)
  .add('log actions', (): React.Element<any> => (
    <DisconnectedPatientSettingsModal
      activeTab={0}
      onChange={action('UPDATE PATIENT')}
      onSubmit={action('CLOSE_PATIENT_SETTINGS')}
      open
      patient={mockPatient}
    />
  ))
  .add('with store', (): React.Element<any> => (
    <Provider store={mockStore}>
      <PatientSettingsModal />
    </Provider>
  ));
