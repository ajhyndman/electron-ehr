import { EditorState } from 'draft-js';


function stripEntityFromCharacters(contentBlock, entityKey) {
  const nextCharacterList = contentBlock
    .get('characterList')
    .map((character) => (
      character.get('entity') === entityKey
        ? character.set('entity', null)
        : character
    ));
  return contentBlock.set('characterList', nextCharacterList);
}

function removeEntity(editorState, entityKey) {
  const nextBlocks = editorState
    .getCurrentContent()
    .getBlockMap()
    .map((block) => stripEntityFromCharacters(block, entityKey));

  const nextContent = editorState
    .getCurrentContent()
    .set('blockMap', nextBlocks);

  const nextEditor = EditorState
    .push(editorState, nextContent, 'apply-entity');

  return nextEditor;
}


export default removeEntity;
