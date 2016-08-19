// @flow
import React from 'react';
import { action, storiesOf } from '@kadira/storybook';
import Add from 'components/icons/Add';

import ButtonUnstyled from 'components/UI/ButtonUnstyled';


storiesOf('Button - Unstyled', module)
  .add('with text', (): React.Element<any> => (
    <ButtonUnstyled
      onClick={action('CLICK')}
    >
      Button Text
    </ButtonUnstyled>
  ))
  .add('with icon', (): React.Element<any> => (
    <ButtonUnstyled
      onClick={action('CLICK')}
    >
      <Add
        fill="#777"
        style={{ border: '1px solid #CCC' }}
        width="9"
      />
    </ButtonUnstyled>
  ));
