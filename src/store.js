import Immutable from 'immutable';
import { CompositeDecorator, EditorState } from 'draft-js';
import { createStore } from 'redux';

import ButtonUnstyled from 'components/UI/ButtonUnstyled';
import FoldingParagraph from 'components/UI/FoldingParagraph';
import reducer from 'reducer';


const PARAGRAPH_REGEX = /[^\n]+$/g;

function findWithRegex(regex, contentBlock, callback) {
  const text = contentBlock.getText();
  let matchArr;
  let start;
  while ((matchArr = regex.exec(text)) !== null) {
    start = matchArr.index;
    callback(start, start + matchArr[0].length);
  }
}

function paragraphStrategy(contentBlock, callback) {
  findWithRegex(PARAGRAPH_REGEX, contentBlock, callback);
}

const compositeDecorator = new CompositeDecorator([{
  strategy: paragraphStrategy,
  component: FoldingParagraph,
}]);

const initialState = Immutable.Map({
  editor: EditorState.createEmpty(compositeDecorator),
});

const store = createStore(
    reducer,
    initialState
);


export default store;
