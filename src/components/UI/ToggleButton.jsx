// @flow
import React from 'react';
import { Entity } from 'draft-js';

import FloatingWrapper from 'components/UI/FloatingWrapper';
import Hoverable from 'components/UI/Hoverable';


type Props = {
  children?: React.Element<any>;
  entityKey: string;
  shadowStyles?: Object;
  onClick: (entityKey: string) => void;
};

// $FlowIssue - Props injected from parent aren't recognized.
const ToggleButton = (props: Props & { hot: boolean }): React.Element<any> => {
  const { data } = Entity.get(props.entityKey);

  return (
    <button
      style={{
        WebkitUserSelect: 'none',
        background: (props.hot ? '#757575' : '#EEEEEE'),
        border: 'none',
        borderRadius: 4,
        color: (data.active
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
};


export default function (props: Props) {
  return (
    <Hoverable>
      <FloatingWrapper>
        <ToggleButton {...props} />
      </FloatingWrapper>
    </Hoverable>
  );
}
