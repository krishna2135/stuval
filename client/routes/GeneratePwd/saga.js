import { call, put, takeLatest } from 'redux-saga/effects';

import { apiResource } from '@/lib/utils/api';

import {
    NewPswdAction,
    newPswdSuccess,
    newPswdFail
} from './actions';

function* reqNewPassword(dObj) {
    try {
        const url = '/newPasswordOnFirstLogin';

        const res = yield call(apiResource.post, url, dObj.payload);

        if (res.status === 1) {
            yield put(
                newPswdSuccess({
                    authToken: res.response.token,
                }),
            );
        } else {
            yield put(
                newPswdFail({
                    message: res.message,
                }),
            );
        }
    } catch (e) {
        yield put(
            newPswdFail({
                message: 'Something went wrong',
            }),
        );
    }
}

function* newPswdSaga() {
    yield takeLatest(NewPswdAction.NEW_PSWD_REQUEST, reqNewPassword);
}

export default newPswdSaga;