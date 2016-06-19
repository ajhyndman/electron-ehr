import 'normalize.css';
import Immutable from 'immutable';
import React from 'react';
import { action, storiesOf } from '@kadira/storybook';

import PatientSettingsModal from 'components/PatientSettingsModal';


const patient = Immutable.Map({
  firstName: 'Andrew',
  lastName: 'Hyndman',
  dob: '1988-10-06',
  gender: 'm',
  address: '131-145 Glebe Point Rd, NSW, 2037',
});

storiesOf('Patient Settings Modal', module)
  .add('open', () => (
    <PatientSettingsModal
      patient={patient}
      onChange={action('UPDATE PATIENT')}
    />
  ));
