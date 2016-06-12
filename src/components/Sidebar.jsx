import React from 'react';

import 'css/no-select.css';
import { EditorTabs } from 'components/Connectors';


const Sidebar = (props) => (
  <div
    style={{
      background: '#F3F3F3',
      float: 'left',
      fontFamily: [
        '"Segoe UI"',
        'Frutiger',
        '"Frutiger Linotype"',
        '"Dejavu Sans"',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ].join(', '),
      height: '100%',
      width: props.width,
    }}
  >
    <div
      className="no-select"
      style={{
        background: '#DCDCDC',
        fontSize: '0.875em',
        fontWeight: '600',
        lineHeight: '1.6em',
        padding: '0 0.75em',
      }}
    >
      ACTIVE CHARTS
    </div>
    <EditorTabs />
  </div>
);

Sidebar.propTypes = {
  width: React.PropTypes.number,
};

Sidebar.defaultProps = {
  width: 180,
};


export default Sidebar;
