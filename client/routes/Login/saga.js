/**
 * Gets the repositories of the user from Github
 */
import { call, put, takeLatest } from 'redux-saga/effects';

import { apiResource } from '@/lib/utils/api';

import { LoginActions, loginSuccess, loginFailure } from './actions';
// export function* login() {

// }

function* verifyLogin(dObj) {
  try {
    const url = '/userLogin';
    const res = yield call(apiResource.post, url, dObj.payload);
    if (res.status === 1) {
      yield put(
        loginSuccess({
          message: res.response,
        }),
      );
      window.location.assign('/home');

    } else {
      yield put(
        loginFailure({
          message: res.message,
        }),
      );
    }
  } catch (e) {
    yield put(
      loginFailure({
        message: 'Something went wrong',
      }),
    );
  }
}

function* loginSaga() {
  yield takeLatest(LoginActions.VERIFY_LOGIN, verifyLogin);
  // yield takeLatest( , );
}

export default loginSaga;
