import Immutable from 'immutable';
import { createStore } from 'redux';
import { EditorState } from 'draft-js';

import reducer from 'reducer';


const initialState = Immutable.Map({
  editor: EditorState.createEmpty(),
});

const store = createStore(
    reducer,
    initialState
);


export default store;
