// @flow
import UUID from 'uuid-js';
import { convertFromRaw } from 'draft-js';
import type { ContentState } from 'draft-js';


function buildToggles(text: string): ContentState {
  const entityMap = {};
  const entityRanges = [];

  let offsetCorrection = 0;

  const finalText = text.replace(
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
        mutability: 'IMMUTABLE',
        data: { active: false },
      };
      entityRanges.push({
        key,
        length: $2.length,
        offset: (offset + $1.length) - offsetCorrection,
      });
      offsetCorrection += $3.length;
      return $2;
    }
  );

  // Construct contentState
  return convertFromRaw({
    blocks: [
      {
        text: finalText,
        type: 'unstyled',
        entityRanges,
      },
    ],
    entityMap,
  });
}


export default buildToggles;
