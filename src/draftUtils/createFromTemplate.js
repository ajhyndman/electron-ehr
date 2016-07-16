import UUID from 'uuid-js';
import { EditorState, convertFromRaw } from 'draft-js';

import compositeDecorator from 'decorators/all';


function createFromTemplate(template = '') {
  const entityMap = {};
  const entityRanges = [];

  let offsetCorrection = 0;

  // Parse Toggles
  const cleanedText = template.replace(
    /(\[\s*)(.*?)(\s*\])/g,
    function buildToggle(match, p1, p2, p3, offset) {
      offsetCorrection += p1.length;
      const key = UUID.create();
      entityMap[key] = {
        type: 'TOGGLE',
        mutability: 'MUTABLE',
      };
      entityRanges.push({
        key,
        length: p2.length,
        offset: offset + p1.length - offsetCorrection,
      });
      offsetCorrection += p3.length;
      return p2;
    }
  );

  // TODO: Parse Sections

  // TODO: Parse patient-specific text

  // Construct contentState
  const templateContent = convertFromRaw({
    blocks: [
      {
        text: cleanedText,
        type: 'unstyled',
        entityRanges,
      },
    ],
    entityMap,
  });

  return EditorState.createWithContent(
    templateContent,
    compositeDecorator
  );
}


export default createFromTemplate;
