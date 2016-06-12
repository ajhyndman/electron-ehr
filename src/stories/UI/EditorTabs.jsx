import 'reset-css/reset.css';
import Immutable from 'immutable';
import React from 'react';
import { storiesOf } from '@kadira/storybook';

import 'fonts/proxima-nova.css';
import EditorTabs from 'components/UI/EditorTabs';


storiesOf('Editor Tabs', module)
  .add('inert', () => (
    <div style={{ fontFamily: 'Proxima Nova' }}>
      <EditorTabs
        activeTab={1}
        tabList={Immutable.List([
          { name: 'Tab Zero' },
          { name: 'Tab One' },
          { name: 'Tab Two' },
          { name: 'Tab Three' },
          { name: 'Tab Four' },
        ])}
      />
    </div>
  ));
