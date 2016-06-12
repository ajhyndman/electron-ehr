import React from 'react';

import Tab from 'components/UI/Tab';


const EditorTabs = (props) => (
  <div>
    {props.tabList.map((tab, i) => (
      <Tab isActive={i === props.activeTab} key={i} name={tab.name} />
    ))}
  </div>
);

EditorTabs.propTypes = {
  activeTab: React.PropTypes.number.isRequired,
  tabList: React.PropTypes.array.isRequired,
};


export default EditorTabs;
