import React from 'react';
import { action, storiesOf } from '@kadira/storybook';

import 'fonts/proxima-nova.css';
import ToggleField from 'components/UI/ToggleField';


storiesOf('Toggle Field', module)
  .add('unselected', () => (
    <div style={{ fontFamily: 'Proxima Nova', padding: '1em' }}>
      <ToggleField
        onClick={action('Toggle Clicked')}
        text="Option Text"
      />
    </div>
  ))
  .add('with text', () => (
    <div style={{ fontFamily: 'Proxima Nova', padding: '1em' }}>
      This is a bunch of regular text with some
      <ToggleField
        onClick={action('Toggle Clicked')}
        text="Optional Text"
      />
      inside.
    </div>
  ));
