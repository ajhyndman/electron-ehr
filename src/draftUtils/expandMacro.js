// @flow
import { EditorState, Modifier } from 'draft-js';
import type { SelectionState } from 'draft-js';

import applyPatientContext from 'draftUtils/applyPatientContext';
import type { MacroList, Patient } from 'store';


function expandMacro(editorState: EditorState, macros: MacroList, patient: Patient): EditorState {
  const currentSelection: SelectionState = editorState.getSelection();

  // Don't trigger macros if more than one character is selected.
  if (!currentSelection.isCollapsed()) { return editorState; }

  const focusKey = currentSelection
    .getFocusKey();
  const focusOffset = currentSelection
    .getFocusOffset();
  const candidateText: string = editorState
    .getCurrentContent()
    .getBlockForKey(focusKey)
    .getText()
    .slice(0, focusOffset);


  for (const key of Object.keys(macros)) {
    const macroRegex = new RegExp(`${key}$`);

    if (macroRegex.test(candidateText)) {
      const nextContentState = Modifier.replaceText(
        editorState.getCurrentContent(),
        currentSelection.merge({
          anchorOffset: currentSelection.getAnchorOffset() - key.length,
        }),
        applyPatientContext(macros[key], patient)
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
