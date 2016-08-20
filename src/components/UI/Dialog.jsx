// @flow
import React from 'react';


type Props = {
  children?: React.Element<any>;
  open?: boolean;
};

const Dialog = (props: Props): React.Element<any> => (
  // backdrop
  <div
    style={{
      background: 'rgba(0, 0, 0, 0.3)',
      bottom: 0,
      display: (props.open ? 'block' : 'none'),
      left: 0,
      position: 'fixed',
      right: 0,
      top: 0,
    }}
  >
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
  </div>
);


export default Dialog;
