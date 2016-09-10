// @flow
import UUID from 'uuid-js';
import { EditorState, convertFromRaw } from 'draft-js';

import applyPatientContext from 'draftUtils/applyPatientContext';
import compositeDecorator from 'decorators/all';
import type { Patient } from 'store';


function createFromTemplate(template: string = '', patient: Patient): EditorState {
  const entityMap = {};
  const entityRanges = [];

  let offsetCorrection = 0;

  let finalText = template.replace(/\r\n/g, '\n');

  // Parse patient-specific text
  finalText = applyPatientContext(finalText, patient);

  // TODO: Parse Sections

  // Parse Toggles
  finalText = finalText.replace(
    /(\[\s*)(.*?)(\s*\])/g,
    function buildToggle(
      match: string,
      $1: string,
      $2: string,
      $3: string,
      offset: number
    ): string {
      offsetCorrection += $1.length;
      const key = UUID.create();
      entityMap[key] = {
        type: 'TOGGLE',
        mutability: 'MUTABLE',
      };
      entityRanges.push({
        key,
        length: $2.length,
        offset: offset + $1.length - offsetCorrection,
      });
      offsetCorrection += $3.length;
      return $2;
    }
  );

  // Construct contentState
  const templateContent = convertFromRaw({
    blocks: [
      {
        text: finalText,
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
