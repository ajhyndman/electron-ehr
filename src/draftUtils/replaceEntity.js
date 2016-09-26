import { CharacterMetaData, ContentBlock, EditorState } from 'draft-js';


function swapEntity(
  contentBlock: ContentBlock,
  entityKey: string,
  newEntityKey: string
): ContentBlock {
  const nextCharacterList = contentBlock
    .get('characterList')
    .map((character: CharacterMetaData): CharacterMetaData => (
      character.get('entity') === entityKey
        ? character.set('entity', newEntityKey)
        : character
    ));
  return contentBlock.set('characterList', nextCharacterList);
}

function replaceEntity(
  editorState: EditorState,
  entityKey: string,
  newEntityKey: string
): EditorState {
  const nextBlocks = editorState
    .getCurrentContent()
    .getBlockMap()
    .map(
      (block: ContentBlock): ContentBlock =>
        swapEntity(block, entityKey, newEntityKey)
    );

  const nextContent = editorState
    .getCurrentContent()
    .set('blockMap', nextBlocks);

  const nextEditor = EditorState
    .push(editorState, nextContent, 'apply-entity');

  return nextEditor;
}


export default replaceEntity;
