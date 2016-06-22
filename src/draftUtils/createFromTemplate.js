import { ContentState, EditorState } from 'draft-js';

import compositeDecorator from 'decorators/all';


function createFromTemplate(template = '') {
  const templateContent = ContentState.createFromText(template);

  // TODO: Parse Toggles
  // TODO: Parse Sections
  // TODO: Parse patient-specific text

  return EditorState.createWithContent(
    templateContent,
    compositeDecorator
  );
}


export default createFromTemplate;
