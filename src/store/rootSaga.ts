import {all, spawn} from 'redux-saga/effects';
import {authActionWatcher} from "@/features/Auth/ducks/sagas";


export function* rootSaga() {
  yield all([
      spawn(authActionWatcher)
  ]);
}
