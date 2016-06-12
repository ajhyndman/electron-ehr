import React from 'react';

import { Tab } from 'components/Connectors';


const EditorTabs = (props) => (
  <div>
    {props.tabList.map((tab, i) => (
      <Tab id={i} isActive={i === props.activeTab} key={i} name={tab} />
    ))}
  </div>
);

EditorTabs.propTypes = {
  activeTab: React.PropTypes.number.isRequired,
  tabList: React.PropTypes.object.isRequired,
};


export default EditorTabs;
