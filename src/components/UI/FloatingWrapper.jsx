import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import type { HoverInterface } from 'components/UI/Hoverable';


function FloatingWrapper(props: HoverInterface) {
  const styles = StyleSheet.create({
    shadow: {
      boxShadow: '',
      transition: '0.15s all',

      ':hover': {
        boxShadow: '0 2px 4px 0 rgba(0,0,0,0.18), 0 2px 4px 0 rgba(0,0,0,0.15)',
      },
    },
  });

  return (
    <span
      onMouseOut={props.onMouseOut}
      onMouseOver={props.onMouseOver}
    >
      {React.Children.map(
        props.children,
        (child) => React.cloneElement(
          child,
          { shadowStyles: css(styles.shadow) }
        )
      )}
    </span>
  );
}


export default FloatingWrapper;
