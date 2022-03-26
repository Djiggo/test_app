import {
  AuthTypes,
  IAuth,
  IAuthCredentials,
  IRecoverPassword,
  isIAuthError,
  IUser
} from "@/features/Auth/ducks/types";
import {call, put, takeLatest} from 'redux-saga/effects';
import {ApiMock} from "@/ApiMock";
import {
  authFailure,
  authSuccess,
  recoverPasswordFailure,
  recoverPasswordSuccess
} from "@/features/Auth/ducks/actions";


export function* authorizeSaga(action: IAuth) {
  try {

    const credentials: IAuthCredentials = action.payload;

    const userData: IUser = yield call(ApiMock.authUser, credentials.username, credentials.password);

    yield put(authSuccess(userData));

  } catch (e: unknown) {
    if (!isIAuthError(e)) {
      throw e;
    }
    yield put(authFailure(e));
  }
}

export function* recoverPasswordSaga(action: IRecoverPassword) {
  try {

    yield call(ApiMock.recoverPassword, action.payload);

    yield put(recoverPasswordSuccess());

  } catch (e: unknown) {
    if (!isIAuthError(e)) {
      throw e;
    }
    yield put(recoverPasswordFailure(e));
  }
}

export const authActionWatcher = function* () {
  yield takeLatest(AuthTypes.AUTHORIZE_REQUEST, authorizeSaga);
  yield takeLatest(AuthTypes.RECOVER_PASSWORD_REQUEST, recoverPasswordSaga);
}
