import { EditorState } from 'draft-js';

import compositeDecorator from 'decorators/all';


function createFromTemplate(template) {
  return EditorState.createEmpty(compositeDecorator);
}


export default createFromTemplate;
