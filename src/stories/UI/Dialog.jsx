import 'normalize.css';
import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Dialog from 'components/UI/Dialog';

storiesOf('Dialog', module)
  .add('open', () => (
    <Dialog open>
      Hello World!
    </Dialog>
  ))
  .add('closed', () => (
    <Dialog>
      Hello World!
    </Dialog>
  ));
