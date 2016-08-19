// @flow
import React from 'react';
import type { Immutable } from 'seamless-immutable';

import { Tab } from 'components/Connectors';


type Props = {
  activeTab: number;
  tabList: Immutable<Array<string>>;
};

const EditorTabs = (props: Props): React.Element<any> => (
  <div>
    {props.tabList.map((tab, i) => (
      <Tab id={i} isActive={i === props.activeTab} key={i} name={tab} />
    ))}
  </div>
);


export default EditorTabs;
