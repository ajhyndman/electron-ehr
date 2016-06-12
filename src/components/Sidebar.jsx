import React from 'react';

import { EditorTabs } from 'components/Connectors';


const Sidebar = (props) => (
  <div
    style={{
      background: '#F3F3F3',
      float: 'left',
      height: '100%',
      width: props.width,
    }}
  >
    <div
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
