import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/stories/EditorPanel');
  require('../src/stories/PatientSettingsModal');
  require('../src/stories/Sidebar');
  require('../src/stories/UI/ButtonUnstyled');
  require('../src/stories/UI/Dialog');
  require('../src/stories/UI/EditorTabs');
  require('../src/stories/UI/FoldingParagraph');
  require('../src/stories/UI/Input');
  require('../src/stories/UI/RadioButton');
  require('../src/stories/UI/Tab');
  require('../src/stories/UI/ToggleButton');
  // require as many stories as you need.
}

configure(loadStories, module);
