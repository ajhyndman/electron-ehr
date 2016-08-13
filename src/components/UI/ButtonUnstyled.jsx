// @flow
import React from 'react';


const ButtonUnstyled = (props: Object): React.Element<any> => (
  <div
    style={{
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'inline-block',
      padding: 0,
      lineHeight: '1em',
    }}
    {...props}
  >
    {props.children}
  </div>
);

ButtonUnstyled.propTypes = {
  children: React.PropTypes.node,
};


export default ButtonUnstyled;
