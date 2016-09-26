// @flow
import { Modifier, SelectionState } from 'draft-js';
import type { CharacterMetaData, ContentBlock, ContentState } from 'draft-js';


function stripToggleGroups(state: ContentState): ContentState {
  return state;
}


export default stripToggleGroups;
