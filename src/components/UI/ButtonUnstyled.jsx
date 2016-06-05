import React from 'react';


const ButtonUnstyled = (props) => (
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
  children: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
  ]),
};


export default ButtonUnstyled;
