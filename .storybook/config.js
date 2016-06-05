import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/stories/EditorPanel');
  require('../src/stories/UI/ButtonUnstyled');
  require('../src/stories/UI/FoldingParagraph');
  require('../src/stories/UI/OptionField');
  // require as many stories as you need.
}

configure(loadStories, module);
