// @flow
import type { CharacterMeta, ContentState } from 'draft-js';


type Predicate = (characterMeta: CharacterMeta) => boolean;


function filterContents(contentState: ContentState, predicate: Predicate): ContentState {
  const nextBlocks = contentState
    .getBlockMap()
    .map(function mapBlocks(block) {
      // filter the character metadata list
      const characterList = block.getCharacterList();
      const nextCharacterList = characterList
        .filter(predicate);

      // filter the actual block text
      const text = block.getText();
      let nextText = '';
      for (let i = 0; i < text.length; i += 1) {
        const character = characterList.get(i);
        if (predicate(character)) {
          nextText += text[i];
        }
      }

      // inject the new state into the block
      return block
        .set('characterList', nextCharacterList)
        .set('text', nextText);
    });

  const nextContent = contentState
    .set('blockMap', nextBlocks);

  return nextContent;
}


export default filterContents;
