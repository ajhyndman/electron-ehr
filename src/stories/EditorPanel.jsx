import Immutable from 'immutable';
import React from 'react';
import { ContentState, EditorState } from 'draft-js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { storiesOf } from '@kadira/storybook';

import EditorPanel from 'components/EditorPanel';
import reducer from 'reducer';


const initialState = Immutable.Map({
  editor: EditorState.createEmpty(),
});
const emptyStore = createStore(
  reducer,
  initialState
);

const sampleState = Immutable.Map({
  editor: EditorState.createWithContent(
    ContentState.createFromText('Hello, Violet!')
  ),
});
const otherStore = createStore(
  reducer,
  sampleState
);


storiesOf('Editor Panel', module)
  .add('with no text', () => (
    <div style={{ border: 'solid 1px #AAA' }}>
      <style>
        {`.public-DraftEditor-content {
          box-sizing: border-box;
          height: 200px;
          padding: 0.5em;
        }`}
      </style>
      <Provider store={emptyStore}>
        <EditorPanel />
      </Provider>
    </div>
  ))
  .add('with text', () => (
    <div style={{ border: 'solid 1px #AAA' }}>
      <style>
        {`.public-DraftEditor-content {
          box-sizing: border-box;
          height: 200px;
          padding: 0.5em;
        }`}
      </style>
      <Provider store={otherStore}>
        <EditorPanel />
      </Provider>
    </div>
  ));
