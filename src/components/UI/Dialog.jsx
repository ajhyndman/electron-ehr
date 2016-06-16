import React from 'react';


const Dialog = (props) => (
  <dialog
    style={{
      border: 0,
      boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.2)',
      fontFamily: [
        '"Segoe UI"',
        'Frutiger',
        '"Frutiger Linotype"',
        '"Dejavu Sans"',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ].join(', '),
      position: 'fixed',
      top: 0,
      width: 400,
    }}
    open={props.open}
  >
    {props.children}
  </dialog>
);

Dialog.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
    React.PropTypes.string,
  ]),
  open: React.PropTypes.bool,
};


export default Dialog;
