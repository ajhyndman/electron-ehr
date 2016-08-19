// @flow
import 'normalize.css';
import React from 'react';
import { action, storiesOf } from '@kadira/storybook';

import RadioButton from 'components/UI/RadioButton';
import demoPage from 'styles/demo-page';


storiesOf('RadioButton', module)
  .add('unchecked', (): React.Element<any> => (
    <div style={demoPage}>
      <RadioButton
        label="Sample RadioButton"
        value="sample value"
        onChange={action('RADIOBUTTON CHANGE')}
        type="text"
      />
    </div>
  ))
  .add('checked', (): React.Element<any> => (
    <div style={demoPage}>
      <RadioButton
        checked
        label="Sample RadioButton"
        value="sample value"
        onChange={action('RADIOBUTTON CHANGE')}
        type="text"
      />
    </div>
  ));
