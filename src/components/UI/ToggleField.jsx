import React from 'react';

import Hoverable from 'components/UI/Hoverable';


const ToggleField = (props) => (
  <Hoverable>
    <span
      onClick={props.onClick.bind(null, props.text)}
      style={{
        background: '#EFEFEF',
        border: '1px solid #DCDCDC',
        borderRadius: 4,
        color: '#BCB3B6',
        cursor: 'pointer',
        lineHeight: 'inherit',
        margin: '0 0.25em',
        padding: '0 0.125em',
      }}
    >
      {props.text}
    </span>
  </Hoverable>
);

ToggleField.propTypes = {
  onClick: React.PropTypes.func,
  text: React.PropTypes.string.isRequired,
};


export default ToggleField;
