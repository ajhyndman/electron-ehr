import { CharacterMetaData, ContentBlock, EditorState } from 'draft-js';


function stripEntityFromCharacters(contentBlock: ContentBlock, entityKey: string): EditorState {
  const nextCharacterList = contentBlock
    .get('characterList')
    .map((character: CharacterMetaData): CharacterMetaData => (
      character.get('entity') === entityKey
        ? character.set('entity', null)
        : character
    ));
  return contentBlock.set('characterList', nextCharacterList);
}

function removeEntity(editorState: EditorState, entityKey: string): EditorState {
  const nextBlocks = editorState
    .getCurrentContent()
    .getBlockMap()
    .map((block: ContentBlock): ContentBlock => stripEntityFromCharacters(block, entityKey));

  const nextContent = editorState
    .getCurrentContent()
    .set('blockMap', nextBlocks);

  const nextEditor = EditorState
    .push(editorState, nextContent, 'apply-entity');

  return nextEditor;
}


export default removeEntity;
