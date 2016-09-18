// @flow
import { EditorState } from 'draft-js';

import applyPatientContext from 'draftUtils/applyPatientContext';
import buildToggles from 'draftUtils/buildToggles';
import compositeDecorator from 'decorators/all';
import type { Patient } from 'store';


function createFromTemplate(template: string = '', patient: Patient): EditorState {
  let finalText: string = template.replace(/\r\n/g, '\n');

  // Parse patient-specific text
  finalText = applyPatientContext(finalText, patient);

  // Parse Toggles
  const templateContent = buildToggles(finalText);

  return EditorState.createWithContent(
    templateContent,
    compositeDecorator
  );
}


export default createFromTemplate;
