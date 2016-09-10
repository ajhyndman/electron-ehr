// @flow
import I from 'seamless-immutable';
import createSagaMiddleware from 'redux-saga';
import { EditorState } from 'draft-js';
import { applyMiddleware, createStore } from 'redux';
import type { Immutable } from 'seamless-immutable'; // eslint-disable-line no-duplicate-imports

import macros from '../macros.json';
import reducer from 'reducer';
import rootSaga from 'sagas';


/**
 * Redux Store
 */

export type MacroList = { [key: string]: string };

export type Patient = {
  dob: string;
  firstName: string;
  gender: 'm' | 'f';
  lastName: string;
};

export type TabState = {
  patient?: Patient;
  state?: EditorState;
};

export type AppState = {
  activeTab: number;
  editors: Array<TabState>;
  macroSettingsEditorState: EditorState;
  macroSettingsOpen: boolean;
  macros: MacroList;
  patientSettingsOpen: boolean;
};

// create saga middleware
const sagaMiddleware = createSagaMiddleware();

const initialState: Immutable<AppState> = I.from({
  activeTab: 0,
  editors: [],
  macroSettingsEditorState: EditorState.createEmpty(),
  macroSettingsOpen: false,
  macros,
  patientSettingsOpen: false,
});

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(sagaMiddleware)
);

// then run the saga
sagaMiddleware.run(rootSaga);

export default store;
