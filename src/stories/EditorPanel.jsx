import I from 'seamless-immutable';
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
const initialState = I.from({
  activeTab: 0,
  editors: [
    {
      state: EditorState.createEmpty(),
    },
  ],
});
const emptyStore = createStore(
  reducer,
  initialState
);


// STATE WITH PLAIN TEXT
const sampleState = I.from({
  activeTab: 0,
  editors: [
    {
      name: 'Violet',
      state: EditorState.createWithContent(
        ContentState.createFromText('Hello, Violet!')
      ),
    },
  ],
});
const otherStore = createStore(
  reducer,
  sampleState
);


// STATE WITH OPTION FIELD
const optionState = I.from({
  activeTab: 0,
  editors: [
    {
      name: 'Toggle Fields',
      state: EditorState.createWithContent(
        convertFromRaw({
          blocks: [
            {
              text: (
                'These are "toggle field" entities: One Two.  Click them to convert to plain text.'
              ),
              type: 'unstyled',
              entityRanges: [
                { offset: 35, length: 3, key: 'toggle-one' },
                { offset: 39, length: 3, key: 'toggle-two' },
              ],
            },
          ],
          entityMap: {
            'toggle-one': {
              type: 'TOGGLE',
              mutability: 'IMMUTABLE',
            },
            'toggle-two': {
              type: 'TOGGLE',
              mutability: 'IMMUTABLE',
            },
          },
        }),
        compositeDecorator
      ),
    },
  ],
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
