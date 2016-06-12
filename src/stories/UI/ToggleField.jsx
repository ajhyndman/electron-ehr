import React from 'react';
import { action, storiesOf } from '@kadira/storybook';

import 'fonts/proxima-nova.css';
import ToggleField from 'components/UI/ToggleField';


storiesOf('Toggle Field', module)
  .add('alone', () => (
    <div style={{ fontFamily: 'Proxima Nova', padding: '1em' }}>
      <ToggleField
        entityKey="1"
        onClick={action('TOGGLE')}
      >
        Option Text
      </ToggleField>
    </div>
  ))
  .add('with text', () => (
    <div style={{ fontFamily: 'Proxima Nova', padding: '1em' }}>
      This is a bunch of regular text with some
      <ToggleField
        entityKey="1"
        onClick={action('TOGGLE')}
      >
        Option
      </ToggleField>
      <ToggleField
        entityKey="2"
        onClick={action('TOGGLE')}
      >
        Fields
      </ToggleField>
      inside.
    </div>
  ));
