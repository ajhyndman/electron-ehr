// @flow
import { Entity, Modifier, SelectionState } from 'draft-js';
import type { CharacterMetaData, ContentBlock, ContentState } from 'draft-js';


function stripToggleGroups(state: ContentState): ContentState {
  // find toggles
  const ranges: Array<[number, number]> = [];
  state.getBlockMap()
    .forEach(function eachBlocks(block) {
      block.findEntityRanges(
        function predicate(character: CharacterMetaData): boolean {
          if (character.getEntity() === null) { return false; }
          const entity = Entity.get(character.getEntity());
          return (
            entity.getType() === 'TOGGLE'
          );
        },
        function eachRange(start, end) {
          ranges.push([start, end]);
        },
      );
    });
  return state;
}


export default stripToggleGroups;
