// @flow
import React from 'react';
import { Entity } from 'draft-js';
import { StyleSheet, css } from 'aphrodite';

import FloatingWrapper from 'components/UI/FloatingWrapper';
import Hoverable from 'components/UI/Hoverable';


type Props = {
  children?: React.Element<any>;
  entityKey: string;
  shadowStyles?: Object;
  onClick: (entityKey: string) => void;
};

// $FlowIssue - Props injected from parent aren't recognized.
function ToggleButton(props: Props & { hot: boolean }): React.Element<any> {
  const { data } = Entity.get(props.entityKey);

  const styles = StyleSheet.create({
    base: {
      WebkitUserSelect: 'none',
      background: '#EEEEEE',
      borderRadius: 4,
      color: (data.active ? '#212121' : '#BDBDBD'),
      cursor: 'pointer',
      margin: '0',
      padding: '0 0.125em',

      ':hover': {
        background: '#757575',
        color: (data.active ? '#FAFAFA' : '#BDBDBD'),
      },
    },
  });

  return (
    <a
      className={`${css(styles.base)} ${props.shadowStyles}`}
      onClick={props.onClick.bind(this, props.entityKey)}
    >
      {props.children}
    </a>
  );
}


export default function (props: Props) {
  return (
    <Hoverable>
      <FloatingWrapper>
        <ToggleButton {...props} />
      </FloatingWrapper>
    </Hoverable>
  );
}
