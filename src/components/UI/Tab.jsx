import React from 'react';


const Tab = (props) => (
  <div
    onClick={props.onClick.bind(null, props.key)}
    style={{
      background: (props.isActive ? '#2196F3' : 'none'),
      color: (props.isActive ? '#FFF' : 'inherit'),
      cursor: 'pointer',
      lineHeight: '1.4em',
      padding: '0 1em',
      whiteSpace: 'nowrap',
    }}
  >
    {props.name}
  </div>
);

Tab.propTypes = {
  isActive: React.PropTypes.bool.isRequired,
  key: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
};


export default Tab;
