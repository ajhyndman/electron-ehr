import React from 'react';

import type { HoverInterface } from 'components/UI/Hoverable';


function FloatingWrapper(props: HoverInterface) {
  const shadowStyles = {
    boxShadow: (props.hot
      ? '0 2px 4px 0 rgba(0,0,0,0.18),0 2px 4px 0 rgba(0,0,0,0.15)'
      : ''),
    transition: '0.15s all',
  };

  return (
    <span
      onMouseOut={props.onMouseOut}
      onMouseOver={props.onMouseOver}
    >
      {React.Children.map(
        props.children,
        (child) => React.cloneElement(
          child,
          {
            hot: props.hot,
            shadowStyles,
          }
        )
      )}
    </span>
  );
}


export default FloatingWrapper;
