// @flow
import React from 'react';


type Props = {
  children?: React.Element<any>;
};


const ToggleGroup = (props: Props) => (
  <span
    style={{
      color: '#AAA',
    }}
  >
    {props.children}
  </span>
);


export default ToggleGroup;
