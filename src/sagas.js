import 'babel-polyfill';
import actions from 'actions';
import store from 'store';
// import { ipcRenderer } from 'electron';
// import { takeEvery, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';


// // worker Saga: will be fired on `OPEN_TEMPLATE` actions
// function* promptForPatientInfo(action) {
//   try {
//     const user = yield call(Api.fetchUser, action.payload.userId);
//     yield put({ type: 'USER_FETCH_SUCCEEDED', user });
//   } catch (e) {
//     yield put({ type: 'USER_FETCH_FAILED', message: e.message });
//   }
// }

/*
  Starts promptForPatientInfo on each dispatched `OPEN_TEMPLATE` action.
  Dous not allow concurrent fetches of user.
*/
export function* mySaga() {
  console.log('Hello, World!');
  // yield* takeLatest("USER_FETCH_REQUESTED", fetchUser);
}


