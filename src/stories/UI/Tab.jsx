// @flow
import 'normalize.css';
import React from 'react';
import { action, storiesOf } from '@kadira/storybook';

import 'fonts/proxima-nova.css';
import Tab from 'components/UI/Tab';


storiesOf('Tab', module)
  .add('active', (): React.Element<any> => (
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
  .add('inactive', (): React.Element<any> => (
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
  .add('both', (): React.Element<any> => (
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
