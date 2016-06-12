import { EditorState, Modifier } from 'draft-js';

import settings from '../../settings.json';


function expandMacro(editorState) {
  // Don't trigger macros if more than one character is selected.
  if (!editorState.getSelection().isCollapsed()) { return editorState; }

  const focusKey = editorState
    .getSelection()
    .getFocusKey();
  const focusOffset = editorState
    .getSelection()
    .getFocusOffset();
  const candidateText = editorState
    .getCurrentContent()
    .getBlockForKey(focusKey)
    .getText()
    .slice(0, focusOffset);


  for (const key of Object.keys(settings.macros)) {
    const macroRegex = new RegExp(`${key}$`);

    if (macroRegex.test(candidateText)) {
      const expandedText = candidateText.replace(
        macroRegex,
        settings.macros[key]
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
