import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/stories/button');
  require('../src/stories/EditorPanel');
  // require as many stories as you need.
}

configure(loadStories, module);
