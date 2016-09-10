// @flow
import { EditorState, Modifier } from 'draft-js';

import applyPatientContext from 'draftUtils/applyPatientContext';
import type { MacroList, Patient } from 'store';


function expandMacro(editorState: EditorState, macros: MacroList, patient: Patient): EditorState {
  // Don't trigger macros if more than one character is selected.
  if (!editorState.getSelection().isCollapsed()) { return editorState; }

  const focusKey = editorState
    .getSelection()
    .getFocusKey();
  const focusOffset = editorState
    .getSelection()
    .getFocusOffset();
  const candidateText: string = editorState
    .getCurrentContent()
    .getBlockForKey(focusKey)
    .getText()
    .slice(0, focusOffset);


  for (const key of Object.keys(macros)) {
    const macroRegex = new RegExp(`${key}$`);

    if (macroRegex.test(candidateText)) {
      const expandedText = candidateText.replace(
        macroRegex,
        applyPatientContext(macros[key], patient)
      );

      const nextContentState = Modifier.replaceText(
        editorState.getCurrentContent(),
        editorState.getSelection().merge({ anchorOffset: 0 }),
        expandedText
      );

      const nextState = EditorState.push(
        editorState,
        nextContentState,
        'insert-characters'
      );

      return nextState;
    }
  }
  return editorState;
}


export default expandMacro;
