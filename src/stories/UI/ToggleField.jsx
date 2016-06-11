import React from 'react';
import { action, storiesOf } from '@kadira/storybook';

import 'fonts/proxima-nova.css';
import ToggleField from 'components/UI/ToggleField';


storiesOf('Toggle Field', module)
  .add('alone', () => (
    <div style={{ fontFamily: 'Proxima Nova', padding: '1em' }}>
      <ToggleField
        onClick={action('Toggle Clicked')}
        decoratedText="Option Text"
      />
    </div>
  ))
  .add('with text', () => (
    <div style={{ fontFamily: 'Proxima Nova', padding: '1em' }}>
      This is a bunch of regular text with some
      <ToggleField
        onClick={action('Toggle Clicked')}
        decoratedText="Option"
      />
      <ToggleField
        onClick={action('Toggle Clicked')}
        decoratedText="Fields"
      />
      inside.
    </div>
  ));
