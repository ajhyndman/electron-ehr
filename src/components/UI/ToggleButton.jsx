// @flow
import React from 'react';

import FloatingWrapper from 'components/UI/FloatingWrapper';
import Hoverable from 'components/UI/Hoverable';


type Props = {
  active: boolean;
  children?: React.Element<any>;
  entityKey: number;
  shadowStyles?: Object;
  onClick: (entityKey: number) => void;
};

// $FlowIssue - Props injected from parent aren't recognized.
const ToggleButton = (props: Props & { hot: boolean }): React.Element<any> => (
  <button
    style={{
      WebkitUserSelect: 'none',
      background: (props.hot ? '#757575' : '#EEEEEE'),
      border: 'none',
      borderRadius: 4,
      color: (props.active
        ? (props.hot
          ? '#FAFAFA'
          : '#212121')
        : '#BDBDBD'),
      cursor: 'pointer',
      display: 'inline',
      lineHeight: 'inherit',
      margin: '0',
      padding: '0 0.125em',
      ...props.shadowStyles,
    }}
    onClick={props.onClick.bind(this, props.entityKey)}
  >
    {props.children}
  </button>
);


export default function (props: Props) {
  return (
    <Hoverable>
      <FloatingWrapper>
        <ToggleButton {...props} />
      </FloatingWrapper>
    </Hoverable>
  );
}
