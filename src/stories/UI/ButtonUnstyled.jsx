import React from 'react';
import { action, storiesOf } from '@kadira/storybook';
import Add from 'components/icons/Add';

import ButtonUnstyled from 'components/UI/ButtonUnstyled';


storiesOf('Button - Unstyled', module)
  .add('with text', () => (
    <ButtonUnstyled
      onClick={action('Button Clicked')}
    >
      Button Text
    </ButtonUnstyled>
  ))
  .add('with icon', () => (
    <ButtonUnstyled
      onClick={action('Button Clicked')}
    >
      <Add
        fill="#777"
        style={{ border: '1px solid #CCC' }}
        width="9"
      />
    </ButtonUnstyled>
  ));
