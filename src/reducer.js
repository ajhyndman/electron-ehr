import { EditorState, Modifier } from 'draft-js';

import macros from 'macros.js';


const reducer = function reducer(state, action) {
  switch (action.type) {
  case 'EDIT': {
    return state.set('editor', action.next);
  }
  case 'MACRO': {
    const editorState = state.get('editor');

    // Don't trigger macros if more than one character is selected.
    if (!editorState.getSelection().isCollapsed()) { return state; }

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


    for (const key of Object.keys(macros)) {
      const macroRegex = new RegExp(`${key}$`);

      if (macroRegex.test(candidateText)) {
        const expandedText = candidateText.replace(
          macroRegex,
          macros[key]
        );

        const nextContentState = Modifier.replaceText(
          editorState.getCurrentContent(),
          editorState.getSelection().merge({ anchorOffset: 0 }),
          expandedText
        );

        const nextState = EditorState.push(editorState, nextContentState, 'insert-characters');

        return state.set(
          'editor',
          nextState
        );
      }
    }
    return state;
  }
  default: {
    return state;
  }
  }
};


export default reducer;
