import { call, put, takeLatest } from 'redux-saga/effects';

import { apiResource } from '@/lib/utils/api';

import {
  ClientModalActions,
  clientModalListLoaded,
  clientModalListFailed,
} from './actions';

function* getClientModalList(dObj) {
  try {
    const url = '/getClientList';

    const res = yield call(apiResource.post, url, dObj.payload);

    if (res.status === 1) {
      yield put(
        clientModalListLoaded({
          clientModalList: res.response,
          totalPages: res.response.totalPages,
        }),
      );
    } else {
      yield put(
        clientModalListLoaded({
          clientModalList: [],
          totalPages: '',
        }),
      );
    }
  } catch (e) {
    yield put(
      clientModalListFailed({
        message: 'Something went wrong',
      }),
    );
  }
}

function* clientModalListSaga() {
  yield takeLatest(ClientModalActions.GET_CLIENTMODAL_LIST, getClientModalList);
}
export default clientModalListSaga;
