import Immutable from 'immutable';
import { EditorState } from 'draft-js';
import { createStore } from 'redux';

import compositeDecorator from 'decorators/all';
import reducer from 'reducer';


const initialState = Immutable.Map({
  editor: EditorState.createEmpty(compositeDecorator),
});

const store = createStore(
    reducer,
    initialState
);


export default store;
