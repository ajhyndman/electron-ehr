import 'reset-css/reset.css';
import React from 'react';
import { action, storiesOf } from '@kadira/storybook';

import 'fonts/proxima-nova.css';
import Tab from 'components/UI/Tab';


storiesOf('Tab', module)
  .add('active', () => (
    <div style={{ fontFamily: 'Proxima Nova' }}>
      <Tab isActive key={0} name="Active Tab" onClick={action('ACTIVATETAB')} />
    </div>
  ))
  .add('inactive', () => (
    <div style={{ fontFamily: 'Proxima Nova' }}>
      <Tab key={0} name="Inactive Tab" onClick={action('ACTIVATETAB')} />
    </div>
  ))
  .add('both', () => (
    <div style={{ fontFamily: 'Proxima Nova' }}>
      <Tab isActive key={0} name="Active Tab" onClick={action('ACTIVATETAB')} />
      <Tab key={1} name="Inactive Tab" onClick={action('ACTIVATETAB')} />
    </div>
  ));
