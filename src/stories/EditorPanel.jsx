import Immutable from 'immutable';
import React from 'react';
import { ContentState, EditorState, convertFromRaw } from 'draft-js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { storiesOf } from '@kadira/storybook';

import compositeDecorator from 'decorators/all';
import reducer from 'reducer';
import store from 'store';
import { EditorPanel } from 'components/Connectors';


// EMPTY STATE
const initialState = Immutable.Map({
  editor: EditorState.createEmpty(),
});
const emptyStore = createStore(
  reducer,
  initialState
);


// STATE WITH PLAIN TEXT
const sampleState = Immutable.Map({
  editor: EditorState.createWithContent(
    ContentState.createFromText('Hello, Violet!')
  ),
});
const otherStore = createStore(
  reducer,
  sampleState
);


// STATE WITH OPTION FIELD
const optionState = Immutable.Map({
  editor: EditorState.createWithContent(
    convertFromRaw({
      blocks: [
        {
          text: (
            'This is a "toggle field" entity: Superman.  Click it to convert to plain text.'
          ),
          type: 'unstyled',
          entityRanges: [{ offset: 33, length: 8, key: 'toggle-one' }],
        },
      ],
      entityMap: {
        'toggle-one': {
          type: 'TOGGLE',
          mutability: 'IMMUTABLE',
        },
      },
    }),
    compositeDecorator
  ),
});
const optionStore = createStore(
  reducer,
  optionState
);


storiesOf('Editor Panel', module)
  .add('with no text', () => (
    <div style={{ border: 'solid 1px #AAA' }}>
      <style>
        {`.public-DraftEditor-content {
          box-sizing: border-box;
          height: 200px;
          padding: 0.5em 0.5em 0.5em 0;
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
          padding: 0.5em 0.5em 0.5em 0;
        }`}
      </style>
      <Provider store={otherStore}>
        <EditorPanel />
      </Provider>
    </div>
  ))
  .add('with folding paragraphs', () => (
    <div style={{ border: 'solid 1px #AAA' }}>
      <style>
        {`.public-DraftEditor-content {
          box-sizing: border-box;
          height: 200px;
          padding: 0.5em 0.5em 0.5em 0;
        }`}
      </style>
      <Provider store={store}>
        <EditorPanel />
      </Provider>
    </div>
  ))
  .add('with option fields', () => (
    <div style={{ border: 'solid 1px #AAA' }}>
      <style>
        {`.public-DraftEditor-content {
          box-sizing: border-box;
          height: 200px;
          padding: 0.5em 0.5em 0.5em 0;
        }`}
      </style>
      <Provider store={optionStore}>
        <EditorPanel />
      </Provider>
    </div>
  ));
