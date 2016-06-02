import { EditorState, Modifier } from 'draft-js';


const reducer = function reducer(state, action) {
  switch (action.type) {
  case 'edit':
    return state.set('editor', action.next);
  case 'macro':
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

    if (/.zisis$/.test(candidateText)) {
      const expandedText = candidateText.replace(
        /.zisis$/,
        'Specifically, I reviewed in detail with this patient, the Internation Spinal Intervention Society (ISIS) diagnostic and therapeutic paradigm for facet joint spondylosis. We reviewed the value of cervicallumbarmedial branch nerve block proven facet spondylosis for longer term palliation with RF neurolysis of the same. We reviewed procedural technique, potential risks, and reasonable expectations.'
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
    return state;
  default:
    return state;
  }
};


export default reducer;
