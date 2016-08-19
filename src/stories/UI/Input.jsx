// @flow
import 'normalize.css';
import React from 'react';
import { action, storiesOf } from '@kadira/storybook';

import Input from 'components/UI/Input';
import demoPage from 'styles/demo-page';


storiesOf('Input', module)
  .add('log actions', (): React.Element<any> => (
    <div style={demoPage}>
      <Input
        label="Sample Input"
        onChange={action('INPUT CHANGE')}
        type="text"
        value=""
      />
    </div>
  ));
