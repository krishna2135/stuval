/**
 * Gets the repositories of the user from Github
 */
import { call, put, takeLatest } from 'redux-saga/effects';

import { apiResource } from '@/lib/utils/api';

import { HomeActions, adminDetailsLoaded, adminDetailsFailed } from './actions';

//Get MyProfile Details
function* getMyProfileDetails(dObj) {
  try {
    const url = '/getDashboardLogo';

    const res = yield call(apiResource.get, url, dObj.payload);

    if (res.status === 1) {
      yield put(
        adminDetailsLoaded({
          adminDetails: res.response,
        }),
      );
    } else {
      yield put(
        adminDetailsLoaded({
          adminDetails: {},
        }),
      );
    }
  } catch (e) {
    yield put(
      adminDetailsFailed({
        message: 'Something went wrong',
      }),
    );
  }
}

function* homeSaga() {
  yield takeLatest(HomeActions.GET_ADMIN_DETAILS, getMyProfileDetails);
}

export default homeSaga;
