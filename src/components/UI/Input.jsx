import React from 'react';
import lift from 'function-lift';

import formControl from 'styles/form-control';


// const lift = (unit, bind, func) => (
//   (a) => (
//     func(bind(unit(a)))
//   )
// );

const getEventValue = (event) => (
  event.target.value
);

const Input = (props) => (
  <label>
    <div style={formControl}>{props.label}</div>
    <div style={formControl}>
      <input
        onChange={lift(getEventValue, (a) => a, props.onChange)}
        style={{ width: '100%' }}
        type={props.type}
        value={props.value}
      />
    </div>
  </label>
);

Input.propTypes = {
  disabled: React.PropTypes.bool,
  label: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
  type: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
};


export default Input;
