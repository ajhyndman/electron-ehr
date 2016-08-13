// @flow
import 'babel-polyfill';
import { takeLatest } from 'redux-saga';
import { put, take } from 'redux-saga/effects';

import actions from 'actions';
import type { Action } from 'actions';


// worker Saga: will be fired on `NEW_TAB` actions
function* promptForPatientInfo(action: Action): Generator<void, void, void> {
  // Create the new editor tab without any data.
  yield put(actions.INIT_TAB());

  // Open the patient settings dialog, and wait for the author to fill it out.
  yield put(actions.OPEN_PATIENT_SETTINGS());
  yield take('CLOSE_PATIENT_SETTINGS');

  // Build the initial state from the template, using the patient settings we just fetched.
  yield put(actions.FINALIZE_TEMPLATE(action.template));
}

/**
 * Starts promptForPatientInfo on each dispatched `OPEN_TEMPLATE` action.
 * Does not allow concurrent fetches of user.
 */
export default function* rootSaga(): Generator<void, void, void> {
  yield* takeLatest('NEW_TAB', promptForPatientInfo);
}
