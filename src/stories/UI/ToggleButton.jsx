// @flow
import React from 'react';
import { action, storiesOf } from '@kadira/storybook';

import 'fonts/proxima-nova.css';
import ToggleButton from 'components/UI/ToggleButton';


storiesOf('Toggle Field', module)
  .add('alone', (): React.Element<any> => (
    <div style={{ fontFamily: 'Proxima Nova', padding: '1em' }}>
      <ToggleButton
        entityKey={1}
        onClick={action('TOGGLE')}
      >
        Option Text
      </ToggleButton>
    </div>
  ))
  .add('with text', (): React.Element<any> => (
    <div style={{ fontFamily: 'Proxima Nova', padding: '1em' }}>
      This is a bunch of regular text with some
      <ToggleButton
        entityKey={1}
        onClick={action('TOGGLE')}
      >
        Option
      </ToggleButton>
      <ToggleButton
        entityKey={2}
        onClick={action('TOGGLE')}
      >
        Fields
      </ToggleButton>
      inside.
    </div>
  ));
