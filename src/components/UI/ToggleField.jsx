import React from 'react';

import Hoverable from 'components/UI/Hoverable';


const ToggleField = (props) => (
  <Hoverable>
    <span
      onClick={props.onClick.bind(null, props.entityKey)}
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
      {props.children}
    </span>
  </Hoverable>
);

ToggleField.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
    React.PropTypes.string,
  ]),
  entityKey: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
  decoratedText: React.PropTypes.string.isRequired,
};


export default ToggleField;
