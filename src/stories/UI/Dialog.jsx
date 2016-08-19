// @flow
import 'normalize.css';
import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Dialog from 'components/UI/Dialog';

storiesOf('Dialog', module)
  .add('open', (): React.Element<any> => (
    <Dialog open>
      Hello World!
    </Dialog>
  ))
  .add('closed', (): React.Element<any> => (
    <Dialog>
      Hello World!
    </Dialog>
  ));
