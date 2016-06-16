import 'normalize.css';
import React from 'react';
import { action, storiesOf } from '@kadira/storybook';

import Input from 'components/UI/Input';


storiesOf('Input', module)
  .add('log actions', () => (
    <Input
      label="Sample Input"
      value=""
      onChange={action('INPUT CHANGE')}
      type="text"
    />
  ));
