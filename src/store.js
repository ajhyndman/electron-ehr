// @flow
import I from 'seamless-immutable';
import createSagaMiddleware from 'redux-saga';
import { EditorState } from 'draft-js';
import { applyMiddleware, createStore } from 'redux';
import type { Immutable } from 'seamless-immutable'; // eslint-disable-line no-duplicate-imports

import reducer from 'reducer';
import rootSaga from 'sagas';


/**
 * Redux Store
 *
 * The below sample code snippet represents a snapshot of what the Redux Store
 * might look like during application execution.
 */

// import { EditorState } from 'draft-js';
// import compositeDecorator from 'decorators/all';

// const sampleStore = Map({
//   activeTab: 0,
//   editors: List([
//     Map({
//       patient: Map({
//         firstName: '하라',
//         lastName: '주',
//         dob: '1991-11-22',
//         gender: 'f',
//         address: '',
//       }),
//       state: EditorState.createEmpty(compositeDecorator),
//     }),
//     Map({
//       patient: Map({
//         firstName: 'Andrew',
//         lastName: 'Hyndman',
//         dob: '1988-10-06',
//         gender: 'm',
//         address: '131-145 Glebe Point Rd, Glebe, NSW 2037, Australia',
//       }),
//       state: EditorState.createEmpty(compositeDecorator),
//     }),
//   ]),
//   patientSettingsOpen: false,
// });

export type Patient = {
  address?: string;
  dob?: string;
  firstName?: string;
  gender?: string;
  lastName?: string;
};

export type TabState = {
  patient?: Patient;
  state?: EditorState;
};

export type AppState = {
  activeTab: number;
  editors: Array<TabState>; // Typescript grammar fix </TabState>;
  patientSettingsOpen: boolean;
};

// create saga middleware
const sagaMiddleware = createSagaMiddleware();

const initialState: Immutable<AppState> = I.from({
  activeTab: 0,
  editors: [],
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
