import React from 'react';
import { action, storiesOf } from '@kadira/storybook';

import 'fonts/proxima-nova.css';
import OptionField from 'components/UI/OptionField';


storiesOf('Option Field', module)
  .add('with one option', () => (
    <div style={{ fontFamily: 'Proxima Nova' }}>
      <OptionField
        onClick={action('Option Clicked')}
        options={['Option']}
      />
    </div>
  ))
  .add('with multiple options', () => (
    <div style={{ fontFamily: 'Proxima Nova' }}>
      <OptionField
        onClick={action('Option Clicked')}
        options={['Option One', 'Option Two', 'Option Three']}
      />
    </div>
  ));
