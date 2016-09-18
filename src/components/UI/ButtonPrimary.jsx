import React from 'react';


type Props = {
  children: React.Element<any>;
  onClick: Function;
  shadowStyles: Object;
};

const ButtonPrimary = (props: Props) => (
  <button
    style={{
      background: '#2196F3',
      border: 'none',
      borderRadius: '2px',
      color: '#FFF',
      cursor: 'pointer',
      fontFamily: [
        '"Segoe UI"',
        'Frutiger',
        '"Frutiger Linotype"',
        '"Dejavu Sans"',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ].join(', '),
      ...props.shadowStyles,
    }}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);


export default ButtonPrimary;
