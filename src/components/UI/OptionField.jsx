import React from 'react';


const OptionField = (props) => (
  <span>
    {props.options.map((option, i) => (
      <span
        key={i}
        onClick={props.onClick.bind(this, option)}
        style={{
          background: '#EEE',
          borderRadius: 4,
          color: '#888',
          cursor: 'pointer',
          margin: '0 0.125em',
          padding: '0 0.25em',
        }}
      >
        {option}
      </span>
    ))}
  </span>
);

OptionField.propTypes = {
  onClick: React.PropTypes.func,
  options: React.PropTypes.array.isRequired,
};


export default OptionField;
