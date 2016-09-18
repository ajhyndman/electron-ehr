// @flow
import React from 'react';

import Hoverable from 'components/UI/Hoverable';


type Props = {
  children?: React.Element<any>;
};

const ToggleField = (props: Props): React.Element<any> => (
  <Hoverable>
    <span
      style={{
        background: '#EFEFEF',
        border: '1px solid #DCDCDC',
        borderRadius: 4,
        color: '#BCB3B6',
        cursor: 'pointer',
        lineHeight: 'inherit',
        margin: '0 0.25em',
        padding: '0 0.125em',
      }}
    >
      {props.children}
    </span>
  </Hoverable>
);


export default ToggleField;
