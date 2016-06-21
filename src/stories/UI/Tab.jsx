import 'normalize.css';
import React from 'react';
import { action, storiesOf } from '@kadira/storybook';

import 'fonts/proxima-nova.css';
import Tab from 'components/UI/Tab';


storiesOf('Tab', module)
  .add('active', () => (
    <div style={{ fontFamily: 'Proxima Nova' }}>
      <Tab
        isActive
        id={0}
        name="Active Tab"
        onClick={action('ACTIVATETAB')}
        onRemove={action('REMOVETAB')}
      />
    </div>
  ))
  .add('inactive', () => (
    <div style={{ fontFamily: 'Proxima Nova' }}>
      <Tab
        isActive={false}
        id={0}
        name="Inactive Tab"
        onClick={action('ACTIVATETAB')}
        onRemove={action('REMOVETAB')}
      />
    </div>
  ))
  .add('both', () => (
    <div style={{ fontFamily: 'Proxima Nova' }}>
      <Tab isActive id={0} name="Active Tab" onClick={action('ACTIVATETAB')} />
      <Tab
        isActive={false}
        id={1}
        name="Inactive Tab"
        onClick={action('ACTIVATETAB')}
        onRemove={action('REMOVETAB')}
      />
    </div>
  ));
