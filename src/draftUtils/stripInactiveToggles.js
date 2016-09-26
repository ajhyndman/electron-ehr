// @flow
import { Entity } from 'draft-js';
import type { CharacterMeta, ContentState } from 'draft-js';

import filterContents from 'draftUtils/filterContents';


function predicate(character: CharacterMeta): boolean {
  if (character.getEntity() === null) { return true; }
  const entity = Entity.get(character.getEntity());
  return !(
    entity.getType() === 'TOGGLE'
    && !entity.get('data').active
  );
}

function stripInactiveToggles(contentState: ContentState): ContentState {
  return filterContents(contentState, predicate);
}


export default stripInactiveToggles;
